import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Button } from "../components/Button";
import { useHttp } from "../http/useHttp";
import styled from "@emotion/styled/macro";

const FeaturedMovies = styled.div`
  display: flex;
  flex-wrap: flex;
`;

const MostWatched = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const InnerLayout = styled.div`
  display: flex;
`;

const dailyTrending = "trending/movie/day";
const discoverMovies = "discover/movie";
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const posterUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

const parseMovies = (moviesResponse) => {
  return moviesResponse.map((movie) => {
    return {
      title: movie.original_title,
      genre: "Test",
      description: movie.overview.slice(0, 60) + "...",
      imgSrc: posterUrl(movie.poster_path),
    };
  });
};

export const Home = () => {
  const { results: dailyTrendingResults } = useHttp(
    `https://api.themoviedb.org/3/${dailyTrending}?api_key=${apiKey}`
  );
  const { results: discoverResults } = useHttp(
    `https://api.themoviedb.org/3/${discoverMovies}?api_key=${apiKey}`
  );

  const trendingMovies = parseMovies(dailyTrendingResults?.results || []);
  const heroMovie = trendingMovies[0];
  const mostWatched = trendingMovies.slice(1, 5);
  const featured = parseMovies(discoverResults?.results || []).slice(0, 10);

  return (
    <>
      <Header />
      <InnerLayout>
        <SideBar />
        <div>
          {heroMovie && (
            <Card
              variant="l"
              imgSrc={heroMovie.imgSrc}
              title={heroMovie.title}
              description={heroMovie.description}
            />
          )}
          <MostWatched>
            {mostWatched.map((movie) => {
              return (
                <Card
                  variant="m"
                  imgSrc={movie.imgSrc}
                  title={movie.title}
                  description={movie.description}
                />
              );
            })}
          </MostWatched>
          Watch featured movies
          <FeaturedMovies>
            {featured.map((movie) => {
              return (
                <Card
                  variant="s"
                  imgSrc={movie.imgSrc}
                  title={movie.title}
                  genre={movie.genre}
                />
              );
            })}
          </FeaturedMovies>
          <Button>See All Movies</Button>
        </div>
      </InnerLayout>
    </>
  );
};
