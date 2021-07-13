import styled from "@emotion/styled/macro";
import { Search } from "./Search";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: 0 1rem;
`;
const Logo = styled.h1``;
const NavContainer = styled.nav``;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
`;
const ListItem = styled.li`
  list-style-type: none;
  padding: 1rem 0.5rem;
  border-right: 1px solid black;
  border-left: 1px solid black;
  :hover {
    background-color: var(--background-color);
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  padding: 1rem 0.5rem;
  font-size: 1.5rem;
  color: var(--text-color);
  :hover {
    color: var(--secondary-text-color);
  }
`;

const menuItems = [
  { label: "Home", path: "/home" },
  { label: "Movies", path: "/movies" },
  { label: "TV Shows", path: "/tv" },
  { label: "News", path: "/news" },
  { label: "Contacts", path: "/contacts" },
];

export const Header = () => {
  return (
    <>
      <Search />
      <HeaderContainer>
        <Logo>Movies Online</Logo>
        <NavContainer>
          <ListContainer>
            {menuItems.map((menuItem) => (
              <ListItem key={menuItem.path}>
                <MenuItem href={menuItem.path}>{menuItem.label}</MenuItem>
              </ListItem>
            ))}
          </ListContainer>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};
