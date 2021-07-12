/**
 * Three variants
 * S
 * M
 * L
 */

import styled from "@emotion/styled/macro";

const Container = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

const ContainerWithBackgroundImg = styled(Container)`
  ${(props) =>
    props.imgSrc &&
    `
    background: url(${props.imgSrc}) no-repeat center center/cover;
    `}
`;
const Img = styled.img``;
const Genre = styled.p``;
const Description = styled.p``;
const Title = styled.h4``;

const SmallCard = ({ title, imgSrc, genre }) => {
  return (
    <Container maxWidth="280px">
      <Img src={imgSrc} maxWidth="280px" height="auto" />
      <Genre>{genre}</Genre>
      <Title>{title}</Title>
    </Container>
  );
};
const MediumCard = ({ title, imgSrc, description }) => {
  return (
    <ContainerWithBackgroundImg maxWidth="480px" imgSrc={imgSrc}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ContainerWithBackgroundImg>
  );
};
const LargeCard = ({ title, imgSrc, description }) => {
  return (
    <ContainerWithBackgroundImg maxWidth="900px" imgSrc={imgSrc} height="320px">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ContainerWithBackgroundImg>
  );
};

export const Card = (props) => {
  const { variant, genre, title, imgSrc, description } = props;

  if (variant === "s")
    return <SmallCard title={title} imgSrc={imgSrc} genre={genre} />;
  if (variant === "m")
    return (
      <MediumCard title={title} imgSrc={imgSrc} description={description} />
    );
  if (variant === "l")
    return (
      <LargeCard title={title} imgSrc={imgSrc} description={description} />
    );

  return <p>Specify a variant</p>;
};
