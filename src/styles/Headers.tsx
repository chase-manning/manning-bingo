import styled from "styled-components";

interface HeaderProps {
  color?: string;
}

export const Header2 = styled.h2<HeaderProps>`
  font-size: 2.2rem;

  color: ${({ color }) => (color ? color : "var(--main)")};
`;
