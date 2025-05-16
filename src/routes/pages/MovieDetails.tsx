import { useMovieStore } from '@/stores/movie'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import Image from '@/components/Image'
import Loader from '@/components/Loader'

export default function MovieDetails() {
  const { movieId } = useParams()
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)
  const currentMovie = useMovieStore(state => state.currentMovie)
  const isLoading = useMovieStore(state => state.isLoading)
  useEffect(() => {
    if (!movieId) return
    fetchMovieDetails(movieId)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        currentMovie && (
          <div className="m-auto flex max-w-[1100px] gap-[20px]">
            <div>
              <Image
                src={currentMovie.Poster.replace('SX300', 'SX500')}
                width={500}
                height={750}
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{currentMovie.Title}</h1>
              <p>{currentMovie.Plot}</p>
              <p>{currentMovie.Actors}</p>
            </div>
          </div>
        )
      )}
    </>
  )
}
