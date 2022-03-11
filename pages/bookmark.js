import styled from "@emotion/styled";
import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../src/components/BookCard";
import SearchBar from "../src/components/SearchBar";
import Layout from "../src/layout";
import { data } from "../src/screensizes/data";

const BookmarkContainer = styled.div`
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

    @media (max-width: ${data.almostTablet}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${data.tablet}) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const Bookmark = () => {
  const { data, searchInput } = useContext(BookContext);
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
        x.author[0].toString().toLowerCase().includes(valueStr)
    );
    setSearch(result);
  };
  return (
    <Layout>
      <BookmarkContainer>
        <div className="set-width">
          <span className="page-title">My Collection</span>
          <SearchBar
            handleInputChange={handleInputChange}
            status={data.length == 0 ? true : false}
          />
          {data.length == 0 ? (
            <span>Your collection is empty</span>
          ) : search.length == 0 ? (
            <span>No item named {searchInput}</span>
          ) : (
            <div className="books">
              {search.map((value, index) => (
                <BookCard
                  key={index}
                  image={value.image}
                  author={value.author}
                  title={value.title}
                  Bookmark={true}
                  categoryId={value.categoryId}
                />
              ))}
            </div>
          )}
        </div>
      </BookmarkContainer>
    </Layout>
  );
};

export default Bookmark;
