import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export type Movies = Movie[]

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      isLoading: false,
      message: '',
      movies: [] as Movies,
      currentMovie: null as MovieDetails | null
    },
    (set, get) => ({
      setSearchText: (searchText: string) => {
        set({ searchText })
      },
      async fetchMovies() {
        const { searchText, isLoading } = get()

        if (!searchText.trim()) return
        if (isLoading) return

        set({ isLoading: true, message: '' })
        // await new Promise(resolve => setTimeout(resolve, 3000))

        try {
          const {
            data: { Search: movies = [], Error: error, Response: result }
          } = await axios(
            `https://omdbapi.com/?apikey=7035c60c&s=${searchText}}`,
            {
              method: 'GET'
            }
          )

          if (result === 'False') {
            set({ movies: [], message: error, isLoading: false })
            return
          }

          set({ movies, isLoading: false })
        } catch (error) {
          if (error instanceof Error) {
            set({ movies: [], message: error.message, isLoading: false })
          }
        }

        // if (response.status !== 200) {
        //   set({ isLoading: false })
        //   return
        // }

        // console.log(await response.json())

        // const  = await response.json()

        // if (!movies.length) {
        //   set({ message: '검색된 결과가 없습니다' })
        // }
      },
      async fetchMovieDetails(movieId?: string) {
        if (!movieId) return
        set({ currentMovie: null, isLoading: true })
        const { data } = await axios.get(
          `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
        )

        set({ currentMovie: data, isLoading: false })
      }
    })
  )
)
