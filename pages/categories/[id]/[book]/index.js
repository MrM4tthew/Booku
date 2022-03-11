import styled from "@emotion/styled";
import React from "react";
import Layout from "../../../../src/layout";
import BookSection from "../../../../src/components/BookSection";

const BookDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px;

  .set-width {
    display: flex;

    .left-side {
      width: 180px;
      margin-right: 25px;

      img {
        width: 180px;
      }
    }

    .right-side {
      width: auto;
      .title {
        font-size: 30px;
        font-weight: 600;
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

        .title {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const Index = ({ bookName, booksData }) => {
  const bookInfo = booksData.filter((x) => x.title == bookName)[0];

  return (
    <Layout>
      <BookDetailContainer>
        <div className="set-width">
          <div className="left-side">
            <img src={bookInfo.cover_url} alt="" />
          </div>
          <div className="right-side">
            <span className="title">{bookInfo.title}</span>
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
              <span className="title">What's inside?</span>
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
