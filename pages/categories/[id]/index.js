import styled from "@emotion/styled";
import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../../../context/BookContext";
import BookCard from "../../../src/components/BookCard";
import SearchBar from "../../../src/components/SearchBar";
import Layout from "../../../src/layout";
import { data } from "../../../src/screensizes/data";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

const BooksContainer = styled.div`
  display: flex;
  justify-content: center;

  .set-width {
    display: flex;
    flex-direction: column;
  }

  .books {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
    row-gap: 25px;
    margin-bottom: 25px;

    @media (max-width: ${data.almostTablet}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${data.tablet}) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .buttons-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;

    .pages {
      margin-right: 10px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }

    button {
      border: none;
      color: rgba(51, 136, 255, 0.7);
      background-color: transparent;
      opacity: 1;
      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }

      &:first-child {
        margin-right: 10px;
      }
    }

    button:disabled,
    button[disabled] {
      opacity: 0.4;
      transition: 100ms ease-in;
      cursor: initial;
    }
  }
`;

const Index = ({ booksData, booksallData, categoryId, page }) => {
  const { data, savedBook } = useContext(BookContext);
  const [search, setSearch] = useState(booksData);
  const router = useRouter();

  const handleInputChange = (e) => {
    var value = e.target.value;
    var valueStr = value.toString().toLowerCase();
    var result = booksallData.filter(
      (x) =>
        x.title.toString().toLowerCase().includes(valueStr) ||
        x.authors[0].toString().toLowerCase().includes(valueStr)
    );

    if (!value) {
      setSearch(booksData);
    } else {
      setSearch(result);
    }
  };

  useEffect(() => {
    setSearch(booksData);
  }, [booksData]);

  const lastPage = Math.ceil(booksallData.length / 8);

  console.log(lastPage);

  return (
    <Layout>
      <BooksContainer>
        <div className="set-width">
          <span className="page-title">Books Collection</span>
          <SearchBar handleInputChange={handleInputChange} />

          <div className="books">
            {search.map((data, index) => (
              <BookCard
                key={index}
                image={data.cover_url}
                title={data.title}
                author={data.authors}
                categoryId={categoryId}
              />
            ))}
          </div>
          <div className="buttons-container">
            <span className="pages">
              Page {page + 1} of {lastPage}
            </span>
            <button
              onClick={() => {
                if (page != 0) {
                  router.push(`/categories/${categoryId}?page=${page - 1}`);
                }
              }}
              disabled={page == 0 ? true : false}
            >
              &#8592; Previous
            </button>
            <button
              onClick={() =>
                router.push(`/categories/${categoryId}?page=${page + 1}`)
              }
              disabled={page == lastPage - 1 ? true : false}
            >
              Next &#8594;
            </button>
          </div>
        </div>
      </BooksContainer>
    </Layout>
  );
};

export async function getServerSideProps({ params, query: { page = 0 } }) {
  const id = params.id;

  const booksRes = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}&size=8&page=${page}`
  );
  const booksallRes = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`
  );
  const booksData = await booksRes.json();
  const booksallData = await booksallRes.json();

  return {
    props: {
      booksData,
      booksallData,
      categoryId: id,
      page: +page,
    },
  };
}

export default Index;
