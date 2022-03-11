import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #4661fa;
  /* background-color: white; */
  height: 60px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  .company-logo {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
  }

  .set-width {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      list-style: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="set-width">
        <span className="company-logo">Booku</span>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Categories</a>
            </Link>
          </li>
          <li>
            <Link href="/bookmark">
              <a>My Books</a>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
