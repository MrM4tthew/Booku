import styled from "@emotion/styled";
import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../src/components/BookCard";
import SearchBar from "../src/components/SearchBar";
import Layout from "../src/layout";

const BookmarkContainer = styled.div`
  display: flex;
  justify-content: center;

  .books {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
    row-gap: 25px;
  }
`;

const bookmark = () => {
  const { data } = useContext(BookContext);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setSearch(data);
  }, [data]);

  const handleInputChange = (e) => {
    var value = e.target.value;
    var valueStr = value.toString().toLowerCase();
    var result = data.filter(
      (x) =>
        x.title.toString().toLowerCase().includes(valueStr) ||
        x.authors[0].toString().toLowerCase().includes(valueStr)
    );
    setSearch(result);
  };

  console.log(search);
  return (
    <Layout>
      <BookmarkContainer>
        <div className="set-width">
          <SearchBar handleInputChange={handleInputChange} />
          {/* {search
        ? search.map((data, index) => {
            <div key={index}>{data.title}</div>;
          })
        : "there is no bookmark data"} */}

          <div className="books">
            {search.map((value, index) => (
              <BookCard
                key={index}
                image={value.image}
                author={value.author}
                bookmark={true}
              />
            ))}
          </div>
        </div>
      </BookmarkContainer>
    </Layout>
  );
};

export default bookmark;
