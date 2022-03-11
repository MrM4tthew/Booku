import styled from "@emotion/styled";
import React from "react";

const FooterContainer = styled.div`
  background-color: #b0b0b0;
  display: flex;
  justify-content: center;

  .set-width {
    display: flex;
    align-items: center;
    height: 40px;

    .text {
      font-size: 12px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="set-width">
        <span className="text">This is footer</span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
