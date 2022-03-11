import styled from "@emotion/styled";
import React, { useState, useContext } from "react";
import { BookContext } from "../../../context/BookContext";
import BookCard from "../../../src/components/BookCard";
import SearchBar from "../../../src/components/SearchBar";
import Layout from "../../../src/layout";

const BooksContainer = styled.div`
  display: flex;
  justify-content: center;

  .books {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
    row-gap: 25px;
  }
`;

const Index = ({ booksData, categoryId }) => {
  const { data, savedBook } = useContext(BookContext);
  const [search, setSearch] = useState(booksData);

  const handleInputChange = (e) => {
    var value = e.target.value;
    var valueStr = value.toString().toLowerCase();
    var result = booksData.filter(
      (x) =>
        x.title.toString().toLowerCase().includes(valueStr) ||
        x.authors[0].toString().toLowerCase().includes(valueStr)
    );
    setSearch(result);
  };

  console.log(categoryId);
  return (
    <Layout>
      <BooksContainer>
        <div className="set-width">
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
        </div>
      </BooksContainer>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;

  const booksRes = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`
  );
  const booksData = await booksRes.json();

  return {
    props: {
      booksData,
      categoryId: id,
    }, // will be passed to the page component as props
  };
}

export default Index;
