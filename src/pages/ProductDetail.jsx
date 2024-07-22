import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import minusBtn from "../assets/images/icon-minus-line.svg";
import plusBtn from "../assets/images/icon-plus-line.svg";

export default function ProductDetail() {
  return (
    <>
      <Header />
      <MainStyle>
        <div className="product-image">
          <img src="" alt="상품이미지" />
        </div>
        <ProductInfoStyle>
          <p className="store-name">백엔드글로벌</p>
          <p className="product-name">딥러닝 개발자 무릎 담요</p>
          <strong className="product-price">17,500</strong>
          <span className="currency-unit">원</span>
          <p className="delivery">
            택배배송<span>/</span>무료배송
          </p>
          <QuantityControlStyle>
            <button className="decrease-btn" type="button">
              <img src={minusBtn} alt="수량감소버튼" />
            </button>
            <button className="product-quantity" type="button">
              1
            </button>
            <button className="increase-btn" type="button">
              <img src={plusBtn} alt="수량추가버튼" />
            </button>
          </QuantityControlStyle>
          <TotalPriceStyle>
            <span className="total-price-txt">총 상품 금액</span>
            <div className="total-quantity">
              <p>
                총 수량 <span>1</span>개
              </p>
              <span className="bar">|</span>
              <div>
                <strong>17,500</strong>
                <span className="currency-unit maroon">원</span>
              </div>
            </div>
          </TotalPriceStyle>
          <PurchaseActionStyle>
            <button className="purchase-btn" type="button">
              바로구매
            </button>
            <button className="shopping-cart-btn" type="button">
              장바구니
            </button>
          </PurchaseActionStyle>
        </ProductInfoStyle>
        <InfoActionStyle>
          <button className="info-btn info-active" type="button ">
            버튼
          </button>
          <button className="info-btn" type="button">
            리뷰
          </button>
          <button className="info-btn" type="button">
            Q&A
          </button>
          <button className="info-btn" type="button">
            반품/교환정보
          </button>
        </InfoActionStyle>
      </MainStyle>
      <Footer />
    </>
  );
}

const MainStyle = styled.main`
  display: grid;
  grid-template-areas:
    "img product"
    "info info";
  place-items: center;
  padding: 80px;
  grid-gap: 50px;

  .product-image {
    width: 600px;
    height: 600px;
    background-color: #fff;
    grid-area: img;
    justify-self: end;
  }

  .product-image img {
    width: 100%;
    height: 100%;
  }
`;

const ProductInfoStyle = styled.div`
  grid-area: product;
  justify-self: start;

  .store-name {
    font-size: 18px;
    color: #767676;
  }

  .product-name {
    font-size: 36px;
    padding: 16px 0 20px 0;
  }

  .product-price {
    font-size: 36px;
    font-weight: bold;
  }

  .currency-unit {
    font-size: 18px;
  }

  .delivery {
    font-size: 16px;
    color: #767676;
    padding: 138px 0 52px 0;
  }
`;

const QuantityControlStyle = styled.div`
  display: flex;
  padding-bottom: 78px;
  position: relative;

  button {
    border: 1px solid var(--color-orange);
    width: 50px;
    height: 50px;
    background-color: #f2f2f2;
    font-size: 18px;

    &:before {
      content: "";
      width: 630px;
      height: 2px;
      background-color: var(--color-orange);
      top: -30px;
      left: 0;
      position: absolute;
    }

    &:after {
      content: "";
      width: 630px;
      height: 2px;
      background-color: var(--color-orange);
      top: 80px;
      left: 0;
      position: absolute;
    }

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }

  .decrease-btn:active {
    background-color: var(--color-maroon);
  }

  .increase-btn:active {
    background-color: var(--color-maroon);
  }
`;

const TotalPriceStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .total-price-txt {
    font-size: 18px;
    font-weight: bold;
  }

  .total-quantity {
    display: flex;
    align-items: center;
    gap: 11px;

    p {
      color: #767676;

      span {
        color: var(--color-maroon);
        font-weight: bold;
      }
    }

    div {
      transform: translateY(-5px);

      strong {
        font-size: 36px;
        color: var(--color-maroon);
        font-weight: bold;
      }
    }
  }

  .bar {
    color: var(--color-orange);
  }
`;

const PurchaseActionStyle = styled.div`
  padding-top: 22px;
  display: flex;
  gap: 14px;

  .purchase-btn {
    width: 416px;
    height: 60px;
    background-color: var(--color-maroon);
    font-size: 18px;
    border-radius: 5px;
    color: var(--color-bg);
    font-weight: bold;
  }

  .shopping-cart-btn {
    width: 200px;
    height: 60px;
    background-color: #767676;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    color: var(--color-bg);
  }
`;

const InfoActionStyle = styled.div`
  grid-area: info;
  align-self: start;
  display: flex;
  padding: 140px 0 70px 0;

  .info-btn {
    border-bottom: 6px solid var(--color-orange);
    width: 320px;
    color: #767676;
    padding-bottom: 12px;
    font-weight: bold;
  }

  .info-active {
    color: var(--color-maroon);
    border-bottom: 6px solid var(--color-maroon);
  }

  .maroon {
    color: var(--color-maroon);
  }
`;
