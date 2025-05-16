import { useMovieStore } from '@/stores/movie'
import Loader from '@/components/Loader'
import MovieItem from '@/components/movies/MovieItem'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  const isLoading = useMovieStore(state => state.isLoading)
  const message = useMovieStore(state => state.message)

  return (
    <>
      {isLoading && (
        <div className="relative h-[30px]">
          <Loader></Loader>
        </div>
      )}
      {message && <div>{message}</div>}
      <div className="flex flex-wrap gap-[20px]">
        {movies.map(movie => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    </>
  )
}
