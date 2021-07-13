import styled from "@emotion/styled/macro";

export const Button = styled.button`
  padding: 1rem 1.5rem;
  text-transform: UPPERCASE;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  background-color: var(--accent-color);
  font-weight: 600;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;
