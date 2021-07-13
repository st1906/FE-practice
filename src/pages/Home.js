import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Button } from "../components/Button";
import { useHttp } from "../http/useHttp";
import {parseMovies} from "../utils/parseMovies";
import styled from "@emotion/styled/macro";

const HomeContainer = styled.div`
  max-width: 960px;
  margin: 1rem auto;
  background-color: var(--background-color);
  padding: 0.5rem 0;
`;

const FeaturedMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
`;

const MostWatched = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  margin-top: 1rem;
`;

const InnerLayout = styled.div`
  display: flex;
  padding: 0 1rem;
`;

const MainContent = styled.main`
  margin-top: 1rem;
  width: 90%;
`;

const SectionTitle = styled.p`
  text-transform: UPPERCASE;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  background-color: var(--primary-color);
`;

const dailyTrending = "trending/movie/day";
const discoverMovies = "discover/movie";
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;


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
    <HomeContainer>
      <Header />
      <InnerLayout>
        <SideBar />
        <MainContent>
          {heroMovie && (
            <Card
              variant="l"
              imgSrc={heroMovie.imgSrc}
              title={heroMovie.title}
              description={heroMovie.description}
            />
          )}
          <MostWatched>
            {mostWatched.map((movie, index) => {
              return (
                <Card
                  key={index}
                  variant="m"
                  imgSrc={movie.imgSrc}
                  title={movie.title}
                  description={movie.description}
                />
              );
            })}
          </MostWatched>
          <SectionTitle>Watch featured movies</SectionTitle>
          <FeaturedMovies>
            {featured.map((movie, index) => {
              return (
                <Card
                  key={index}
                  variant="s"
                  imgSrc={movie.imgSrc}
                  title={movie.title}
                  genre={movie.genre}
                />
              );
            })}
          </FeaturedMovies>
          <Button>See All Movies</Button>
        </MainContent>
      </InnerLayout>
    </HomeContainer>
  );
};
