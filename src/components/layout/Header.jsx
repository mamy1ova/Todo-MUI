import React from "react";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DarkMode from "../darkMode/DarkMode";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <BiLogOut />
      </Link>
      <DarkMode />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.nav`
  background-color: orange;
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  justify-content: end;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  & a {
    text-decoration: none;
    color: white;
    font-size: 28px;
    margin: 5px 5px 0 0;
  }

  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    margin: 20px;
  }
`;

