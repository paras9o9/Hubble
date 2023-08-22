import styled from "styled-components";

export const StyledHeader = styled.header`
  /* Then using prop theme in our styled components for dynamic styling */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  /* Nested styling in Styled Components */
  // h1 {
  //     color: red;
  // }

  // &:hover {
  //     background-color: black;
  // }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.moblie}) {
    flex-derection: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.moblie}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (maax-width: ${({ theme }) => theme.moblie}) {
    margin: 40px 0 30px;
  }
`;
