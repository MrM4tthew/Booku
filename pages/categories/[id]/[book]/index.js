import styled from "@emotion/styled";
import React, { useContext } from "react";
import Layout from "../../../../src/layout";
import BookSection from "../../../../src/components/BookSection";
import { data } from "../../../../src/screensizes/data";
import { BookContext } from "../../../../context/BookContext";

const BookDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px;

  .set-width {
    display: flex;

    @media (max-width: ${data.tablet}) {
      flex-direction: column;
      align-items: center;
    }

    .left-side {
      width: 180px;
      margin: 0px 25px 0px 0px;
      @media (max-width: ${data.tablet}) {
        margin: 0px 0px 25px 0px;
      }

      img {
        width: 180px;
      }
    }

    .right-side {
      width: 100%;

      .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 30px;
          font-weight: 600;
        }

        button {
          border: none;
          font-size: 15px;
          padding: 8px 15px;
          border-radius: 7px;
          background-color: #0378ff;
          color: white;
          cursor: pointer;
          opacity: 1;
          transition: opacity 100ms ease-in-out;
          &:hover {
            opacity: 0.9;
          }
        }

        .message {
          background-color: #02bd50;
          padding: 10px;
          font-size: 12px;
          font-weight: 600;
          color: white;
          border-radius: 15px;
        }
      }

      .authors {
        margin-bottom: 10px;
        color: rgba(0, 0, 0, 0.8);
        .author:not(:last-child):after {
          content: ", ";
        }
      }

      .description {
        font-size: 13.5px;
        color: rgba(0, 0, 0, 0.7);
      }

      .book-sections {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;

        .title {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const Index = ({ bookName, booksData, id }) => {
  const { setSavedBook, saveBook, data } = useContext(BookContext);
  const bookInfo = booksData.filter((x) => x.title == bookName)[0];
  const bookSaved = data.filter((x) => x.title == bookInfo.title);

  return (
    <Layout>
      <BookDetailContainer>
        <div className="set-width">
          <div className="left-side">
            <img src={bookInfo.cover_url} alt="" />
          </div>
          <div className="right-side">
            <div className="title-container">
              <span className="title">{bookInfo.title}</span>
              {bookSaved.length == 0 ? (
                <button
                  onMouseOver={() =>
                    setSavedBook({
                      image: bookInfo.cover_url,
                      title: bookInfo.title,
                      author: bookInfo.authors,
                      categoryId: id,
                    })
                  }
                  onClick={() => saveBook()}
                >
                  Save
                </button>
              ) : (
                <span className="message">Book is Saved</span>
              )}
            </div>
            <div className="authors">
              by&nbsp;
              {bookInfo.authors.length == 1
                ? bookInfo.authors[0]
                : bookInfo.authors.map((value, index) => (
                    <span className="author" key={index}>
                      {value}
                    </span>
                  ))}
            </div>
            <p className="description">{bookInfo.description}</p>
            <div className="book-sections">
              <span className="title">What&apos;s inside?</span>
              <div className="sections">
                {bookInfo.sections.map((value, index) => (
                  <BookSection
                    key={index}
                    number={index}
                    title={value.title}
                    content={value.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BookDetailContainer>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const bookName = context.params.book;

  const booksRes = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`
  );
  const booksData = await booksRes.json();

  return {
    props: {
      booksData,
      id,
      bookName,
    },
  };
}

export default Index;
