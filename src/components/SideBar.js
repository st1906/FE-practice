import styled from "@emotion/styled/macro";

const SideBarContainer = styled.aside`
  padding: 1rem 1rem 0 0;
`;
const ListContainer = styled.ul`
  background-color: var(--primary-color);
`;
const ListItem = styled.li`
  list-style-type: none;
  padding: 0.5rem;
  text-transform: UPPERCASE;
  border-bottom: 1px solid black;

  :hover {
    color: var(--primary-color);
    background-color: var(--accent-color);
    cursor: pointer;
  }
`;
const AboutContainer = styled.div``;
const AboutTitle = styled.h4`
  margin: 1rem 0;
`;

const categories = [
  { label: "Comedy" },
  { label: "Drama" },
  { label: "Fantastic" },
  { label: "Romantic" },
  { label: "Anime" },
  { label: "Adventure" },
  { label: "Thriller" },
  { label: "Science" },
  { label: "Mystic" },
  { label: "Military" },
  { label: "Historical" },
  { label: "Western" },
  { label: "Musical" },
  { label: "Family" },
  { label: "Sport" },
];

export const SideBar = () => {
  return (
    <SideBarContainer>
      <ListContainer>
        {categories.map((category) => (
          <ListItem key={category.label}>{category.label}</ListItem>
        ))}
      </ListContainer>
      <AboutContainer>
        <AboutTitle>About</AboutTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AboutContainer>
    </SideBarContainer>
  );
};
