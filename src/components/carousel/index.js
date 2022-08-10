import React from "react";
import Item from "./item";
import Control from "./control";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./style.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return <Control onClick={() => onClick()} arrowDirection="right" />;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return <Control onClick={() => onClick()} arrowDirection="left" />;
};

export default function CarouselSlide({ movies }) {
  return (
    <div className="carousel">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable
        slidesToSlide={5}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {movies.map((x, i) => (
          <Item movie={x} width="200px" key={i} />
        ))}
      </Carousel>
    </div>
  );
}
