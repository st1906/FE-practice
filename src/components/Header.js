import styled from "@emotion/styled/macro";

const HeaderContainer = styled.header``;
const Search = styled.input``;
const NavContainer = styled.nav``;
const Logo = styled.h1``;

export const Header = () => {
  return (
    <HeaderContainer>
      <Search />
      <div>
        <Logo>Movies Online</Logo>
        <NavContainer>Home | Movies | TV Shows | News | Contacts</NavContainer>
      </div>
    </HeaderContainer>
  );
};
