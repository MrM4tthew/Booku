import styled from "@emotion/styled";
import Link from "next/link";
import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
  const { setSavedBook, saveBook } = useContext(BookContext);

  return (
    <CategoryContainer>
      <Link href={`/categories/${categoryId}/${title}`}>
        <a>
          <img src={image} alt="" />
          <div className="title-container">
            <span className="author">
              {author.length == 2 ? `${author[0]} and ${author[1]}` : author[0]}
            </span>
            {!bookmark ? (
              <button
                onMouseOver={() =>
                  setSavedBook({ image: image, author: author })
                }
                onClick={() => saveBook()}
              >
                Save
              </button>
            ) : (
              ""
            )}
          </div>
        </a>
      </Link>
    </CategoryContainer>
  );
};

export default BookCard;
