import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const HomeBannerContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  margin: 50px 0px;

  .leftSide {
    width: auto;
    height: 100%;

    img {
      width: auto;
      height: 100%;
      object-fit: contain;
    }
  }

  .rightSide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 100%;
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerContainer>
      <div className="leftSide">
        <img src="/book1.png" alt="" />
      </div>
      <div className="rightSide">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ullam
          possimus consequuntur sapiente ex dolorem aliquam voluptatum nulla hic
          rem neque suscipit, totam maxime debitis, ipsum vero nobis minima
          placeat?
        </p>
        <Link href="/">
          <a>Read Now</a>
        </Link>
      </div>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
