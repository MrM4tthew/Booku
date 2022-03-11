import styled from "@emotion/styled";
import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 20px 0px;

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 18px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  input:disabled,
  input[disabled] {
    opacity: 0.1;
    transition: 100ms ease-in;
  }
`;

const SearchBar = ({ handleInputChange, status }) => {
  const { setSearchInput } = useContext(BookContext);
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => {
          handleInputChange(e);
          setSearchInput(e.target.value);
        }}
        disabled={status}
      />
    </SearchContainer>
  );
};

export default SearchBar;
