import React, { useContext } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { BookContext } from "../../context/BookContext";

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

      .collection-menu {
        position: relative;

        .item-count {
          position: absolute;
          right: 0;
          top: 0;
          background-color: red;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .num {
            color: white;
            font-size: 13px;
          }
        }
      }
    }
  }
`;

const Header = () => {
  const { data } = useContext(BookContext);
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
          <li className="collection-menu">
            <Link href="/bookmark">
              <a>My Collection</a>
            </Link>
            {data.length != 0 ? (
              <div className="item-count">
                <span className="num">{data.length}</span>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
