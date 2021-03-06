import React, { useContext } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { BookContext } from "../../context/BookContext";
import { useRouter } from "next/router";

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 80;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #4661fa;
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
      width: 180px;
      list-style: none;

      a {
        color: white;
        opacity: 1;

        &.active {
          opacity: 0.7;
          cursor: initial;
        }
      }

      .collection-menu {
        position: relative;

        .item-count {
          position: absolute;
          right: -10px;
          top: -6px;
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
  const router = useRouter();

  return (
    <HeaderContainer>
      <div className="set-width">
        <span className="company-logo">Booku</span>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li className="collection-menu">
            <Link href="/bookmark">
              <a className={router.pathname == "/bookmark" ? "active" : ""}>
                My Collection
              </a>
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
