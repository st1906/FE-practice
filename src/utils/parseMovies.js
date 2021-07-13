const posterUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;
export const parseMovies = (moviesResponse) => {
    return moviesResponse.map((movie) => {
      return {
        title: movie.original_title,
        genre: "Genre", // need to fetch via genre id
        description: movie.overview.slice(0, 60) + "...",
        imgSrc: posterUrl(movie.poster_path),
      };
    });
  };