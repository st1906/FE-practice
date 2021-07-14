import styled from "@emotion/styled/macro";
import { SearchIcon } from "../icons/SearchIcon";

const SearchInput = styled.input`
  background-color: var(--primary-color);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: var(--text-color);
`;
const SearchContainer = styled.div`
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchIconContainer = styled.span`
  margin-left: 0.5rem;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchIconContainer>
        <SearchIcon color="var(--accent-color)" />
      </SearchIconContainer>
    </SearchContainer>
  );
};
