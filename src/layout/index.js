import styled from "@emotion/styled";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const PageContainer = styled.div`
  min-height: 100vh;
`;
const HeaderBox = styled.div`
  height: 60px;
`;

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderBox />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
};

export default Index;
