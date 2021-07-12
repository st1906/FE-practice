import styled from "@emotion/styled/macro";

const SideBarContainer = styled.aside``;
const ListContainer = styled.ul``;
const ListItem = styled.li``;
const AboutContainer = styled.div``;

export const SideBar = () => {
  return (
    <SideBarContainer>
      <ListContainer>
        <ListItem>Comedy</ListItem>
        <ListItem>Drama</ListItem>
        <ListItem>Fantastic</ListItem>
        <ListItem>Romantic</ListItem>
        <ListItem>Anime</ListItem>
        <ListItem>Adventure</ListItem>
        <ListItem>Thriller</ListItem>
        <ListItem>Mystic</ListItem>
        <ListItem>Science</ListItem>
        <ListItem>Military</ListItem>
        <ListItem>Historical</ListItem>
        <ListItem>Western</ListItem>
        <ListItem>Musical</ListItem>
        <ListItem>Family</ListItem>
        <ListItem>Sport</ListItem>
      </ListContainer>
      <AboutContainer>
        <p>About</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </AboutContainer>
    </SideBarContainer>
  );
};
