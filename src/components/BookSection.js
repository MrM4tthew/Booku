import styled from "@emotion/styled";
import React, { useState } from "react";

const BSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 10px 0px 0px 0px;
  }

  .sectionTitle {
    font-size: 15px;
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    transition: color 100ms ease-in-out;
    margin: 0px 0px 5px 0px;

    &:hover {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  p {
    opacity: 0;
    display: none;
    font-size: 14px;
    padding: 0px 0px 0px 16px;

    &.open {
      display: block;
      opacity: 1;
    }
  }
`;

const BookSection = ({ title, content, number }) => {
  // console.log(number)
  const [open, setOpen] = useState(false);
  return (
    <BSection>
      <span className="sectionTitle" onClick={() => setOpen(!open)}>
        {`${number + 1}. ${title}`}
      </span>
      <p className={open ? "open" : ""}>{content}</p>
    </BSection>
  );
};

export default BookSection;
