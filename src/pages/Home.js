import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Button } from "../components/Button";
import mockImg from "../logo.svg";
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

export const Home = () => {
  return (
    <>
      <Header />
      <InnerLayout>
        <SideBar />
        <div>
          <Card
            variant="l"
            imgSrc={mockImg}
            title="Test"
            genre="Test genere"
            description="Test descr"
          />
          <MostWatched>
            <Card
              variant="m"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
              description="Test descr"
            />
            <Card
              variant="m"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
              description="Test descr"
            />
            <Card
              variant="m"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
              description="Test descr"
            />
            <Card
              variant="m"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
              description="Test descr"
            />
          </MostWatched>
          Watch featured movies
          <FeaturedMovies>
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
            <Card
              variant="s"
              imgSrc={mockImg}
              title="Test"
              genre="Test genere"
            />
          </FeaturedMovies>
          <Button>See All Movies</Button>
        </div>
      </InnerLayout>
    </>
  );
};
