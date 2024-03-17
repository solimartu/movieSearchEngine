import responseMovies from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";

export function useMovies() {
  const movies = responseMovies.Search;
  //if at any point API changes any parameter name, we will have the error
  //spread everywhere. So with this, we cut the contract and we can control it
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return { movies: mappedMovies };
}
