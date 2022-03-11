import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 13px;
  margin: 0px 7px 7px 0px;
  color: rgba(0, 0, 0, 0.7);
`;

const CategoriesCard = ({ name, link }) => {
  return (
    <CategoriesContainer>
      <Link href={`/categories/${link}`}>
        <a>{name}</a>
      </Link>
    </CategoriesContainer>
  );
};

export default CategoriesCard;
