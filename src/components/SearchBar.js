import styled from "@emotion/styled";
import React from "react";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 30px 0px;

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
  input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const SearchBar = ({ handleInputChange }) => {
  return (
    <SearchContainer>
      <input type="text" placeholder="search..." onChange={handleInputChange} />
    </SearchContainer>
  );
};

export default SearchBar;
