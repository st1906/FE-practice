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

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const ContainerWithBackgroundImg = styled(Container)`
  ${(props) =>
    props.imgSrc &&
    `
    background: linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), url(${props.imgSrc}) no-repeat bottom center/cover;
    `}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Img = styled.img`
  max-width: 280px;
  max-height: 100%;
`;
const Genre = styled.p``;
const Description = styled.p`
  text-align: center;
  margin: 0.5rem 0;
  text-transform: UPPERCASE;
  color: var(--secondary-text-color);
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
`;
const Title = styled.h4`
  margin: 0.5rem 0;
  text-transform: UPPERCASE;
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
`;

const SmallCard = ({ title, imgSrc, genre }) => {
  return (
    <Container maxWidth="150px">
      <Img src={imgSrc} width="140px" />
      <Genre>{genre}</Genre>
      <Title>{title}</Title>
    </Container>
  );
};
const MediumCard = ({ title, imgSrc, description }) => {
  return (
    <ContainerWithBackgroundImg maxWidth="480px" imgSrc={imgSrc} height="200px">
      <Title fontSize="1.5rem">{title}</Title>
      <Description>{description}</Description>
    </ContainerWithBackgroundImg>
  );
};
const LargeCard = ({ title, imgSrc, description }) => {
  return (
    <ContainerWithBackgroundImg maxWidth="900px" imgSrc={imgSrc} height="320px">
      <Title fontSize="2rem">{title}</Title>
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
