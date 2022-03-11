import styled from "@emotion/styled";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .bookmark-cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    opacity: 1;

    transition: opacity 100ms ease-in-out;

    &.transparent {
      opacity: 0;
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      pointer-events: none;
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        font-size: 16px;
        padding: 15px 0px;
        width: 60%;
        color: white;
        pointer-events: visible;

        &.delete {
          background-color: red;
          cursor: pointer;
        }

        &.view {
          background-color: green;
          margin-bottom: 9px;
        }
      }
    }
  }

  img {
    border-radius: 8px;
    width: 100%;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    margin-top: 6px;

    .author {
      font-size: 13px;
      font-weight: 600;
    }
  }
`;

const BookCard = ({ image, author, title, bookmark, categoryId }) => {
  const { setSavedBook, deleteBook, savedBook } = useContext(BookContext);
  const [transparent, setTransparennt] = useState(false);

  return (
    <BookContainer>
      {bookmark ? (
        <div
          className={
            transparent ? "bookmark-cover" : "bookmark-cover transparent"
          }
          onMouseOver={() => setTransparennt(true)}
          onMouseLeave={() => setTransparennt(false)}
        >
          <div className="buttons-container">
            <Link href={`/categories/${categoryId}/${title}`}>
              <a className="button view">View Detail</a>
            </Link>
            <span
              className="button delete"
              onMouseEnter={() => setSavedBook({ title: title })}
              onClick={() => deleteBook()}
            >
              Delete
            </span>
          </div>
        </div>
      ) : (
        ""
      )}

      <Link href={`/categories/${categoryId}/${title}`}>
        <a>
          <img src={image} alt="" />
          <div className="title-container">
            <span className="author">
              {author.length == 2 ? `${author[0]} and ${author[1]}` : author[0]}
            </span>
          </div>
        </a>
      </Link>
    </BookContainer>
  );
};

export default BookCard;
