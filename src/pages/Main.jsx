import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import eventBanner1 from "../assets/images/event-banner-1.svg";
import eventBanner2 from "../assets/images/event-banner-2.svg";
import eventBanner3 from "../assets/images/event-banner-3.svg";
import eventBanner4 from "../assets/images/event-banner-4.svg";
import eventBanner5 from "../assets/images/event-banner-5.svg";
import iconSwiper1 from "../assets/images/icon-swiper-1.svg";
import iconSwiper2 from "../assets/images/icon-swiper-2.svg";

export default function Main() {
  const [click, setClick] = useState(0);
  const imagesBoxRef = useRef(null);
  const outerWidthRef = useRef(0);
  const autoSlideRef = useRef(null);

  const eventBanners = [
    eventBanner1,
    eventBanner2,
    eventBanner3,
    eventBanner4,
    eventBanner5,
  ];

  useEffect(() => {
    outerWidthRef.current = imagesBoxRef.current.offsetWidth;
    window.addEventListener("resize", () => {
      outerWidthRef.current = imagesBoxRef.current.offsetWidth;
    });

    autoSlideRef.current = setInterval(() => moveToNextImage(), 3000);

    return () => {
      clearInterval(autoSlideRef.current);
    };
  }, []);

  const moveToNextImage = () => {
    setClick((prevClick) => (prevClick + 1) % eventBanners.length);
  };

  const moveToPreviousImage = () => {
    setClick((prevClick) =>
      prevClick > 0 ? prevClick - 1 : eventBanners.length - 1
    );
  };

  const handleDotClick = (index) => {
    setClick(index);
  };

  useEffect(() => {
    if (imagesBoxRef.current) {
      imagesBoxRef.current.style.transform = `translateX(-${
        click * outerWidthRef.current
      }px)`;
    }
  }, [click]);

  return (
    <>
      <Header />
      <main>
        <ImageSliderStyle>
          <div className="images-box" ref={imagesBoxRef}>
            {eventBanners.map((banner, index) => (
              <img key={index} src={banner} alt="이벤트배너" />
            ))}
          </div>
          <BtnImagesSliderStyle>
            <button
              onClick={moveToPreviousImage}
              className="btn-left-swiper"
              type="button"
            >
              <img src={iconSwiper1} alt="이미지슬라이더좌측버튼" />
            </button>
            <button
              onClick={moveToNextImage}
              className="btn-right-swiper"
              type="button"
            >
              <img src={iconSwiper2} alt="이미지슬라이더우측버튼" />
            </button>
          </BtnImagesSliderStyle>
          <BtnDotsStyle>
            {eventBanners.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === click ? "dot-active" : ""}`}
                type="button"
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </BtnDotsStyle>
        </ImageSliderStyle>
        <ProductsContainerStyle></ProductsContainerStyle>
      </main>
      <Footer />
    </>
  );
}

const ImageSliderStyle = styled.div`
  min-width: 300px;
  overflow: hidden;
  position: relative;

  .images-box {
    display: flex;
    transition: all 1s;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const BtnImagesSliderStyle = styled.div`
  .btn-left-swiper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .btn-right-swiper {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

const BtnDotsStyle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 18px;

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50px;
    background-color: #fff;
    padding: 0;
    margin-right: 5px;
  }

  .dot-active {
    background-color: #000;
  }
`;

const ProductsContainerStyle = styled.ul`
  display: grid;

  .product {
    display: flex;
    flex-direction: column;
  }

  .product-image {
    width: 380px;
    height: 380px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 49px;
    padding: 80px 300px 180px 300px;
  }

  .product-image img:hover,
  .store-name:hover,
  .product-name:hover {
    opacity: 0.6;
  }

  .store-name {
    color: #767676;
    font-size: 16px;
    padding-top: 16px;
    cursor: pointer;
  }

  .product-name {
    color: #000;
    font-size: 18px;
    padding: 10px 0 10px 0;
    cursor: pointer;
  }

  .product-price {
    color: #000;
    font-size: 24px;
    font-weight: bold;
  }

  .soldout-image {
    width: 125px;
    padding-bottom: 5px;
  }
`;
