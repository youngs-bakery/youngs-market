import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import iconPlus from "../assets/images/icon-plus-line.svg";
import iconMinus from "../assets/images/icon-minus-line.svg";
import deleteBtn from "../assets/images/icon-delete.svg";

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <MainStyle>
        <h2>장바구니</h2>
        <ProductDetailStyle>
          <div>
            <input type="radio" id="select-all" />
            <label for="select-all"></label>
          </div>
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </ProductDetailStyle>
        <ShoppingCartStyle>
          <CartItemStyle>
            <div>
              <input type="radio" id="cart-item-check" />
              <label for="cart-item-check"></label>
            </div>
            <button type="button">
              <img
                src="https://openmarket.weniv.co.kr/media/products/2024/06/09/166_4d8c96203a6148c90363da17b1bcc7b7.jpg"
                alt="상품이미지"
              />
            </button>
            <div>
              <p>백엔드글로벌</p>
              <p>딥러닝 개발자 무릎 담요</p>
              <strong>17,500원</strong>
              <p>
                택배배송<span>/</span>무료배송
              </p>
            </div>
            <div>
              <button type="button">
                <img src={iconMinus} alt="수량감소버튼" />
              </button>
              <button class="product-quantity" type="button">
                1
              </button>
              <button type="button">
                <img src={iconPlus} alt="수량추가버튼" />
              </button>
            </div>
            <div>
              <strong>17,500원</strong>
              <button type="button">주문하기</button>
            </div>
            <DeleteBtnStyle type="button">
              <img src={deleteBtn} alt="삭제버튼" />
            </DeleteBtnStyle>
          </CartItemStyle>
        </ShoppingCartStyle>
        <div>
          <PaymentAmountCalculationStyle>
            <div>
              <p>총 상품금액</p>
              <strong>46,500</strong>
              <span>원</span>
            </div>
            <div>
              <p>상품 할인</p>
              <strong>0</strong>
              <span> 원 </span>
            </div>
            <div>
              <p>배송비</p>
              <strong>0</strong>
              <span>원</span>
            </div>
            <div>
              <p>결제 예정 금액</p>
              <strong>46,500</strong>
              <span>원</span>
            </div>
          </PaymentAmountCalculationStyle>
          <FinalActionsStyle>
            <button class="final-order-btn" type="button">
              주문하기
            </button>
            <button class="final-delete-btn" type="button">
              선택삭제
            </button>
          </FinalActionsStyle>
        </div>
      </MainStyle>
      <Footer />
    </>
  );
}

const MainStyle = styled.main`
  padding: 54px 10px;

  h2 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
`;

const ProductDetailStyle = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.8fr 1fr 1fr;
  width: 1280px;
  background-color: #f2f2f2;
  font-size: 18px;
  padding: 20px 30px;
  margin: 52px auto 35px auto;
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;

    input[type="radio"] {
      display: none;
    }

    label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      margin-bottom: 10px;
      display: inline-block;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: -5px;
        width: 18px;
        height: 18px;
        border: 2px solid var(--color-maroon);
        border-radius: 50%;
      }
    }

    input[type="radio"]:checked + label::after {
      content: "";
      position: absolute;
      left: 5px;
      top: 0px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--color-maroon);
    }
  }

  span {
    justify-self: center;
    font-size: 18px;
    color: var(--color-black);
  }
`;

const ShoppingCartStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CartItemStyle = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.5fr 1.3fr 1fr 1fr;
  width: 1280px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 20px 30px;
  border-radius: 10px;
  position: relative;

  div:nth-of-type(1) {
    align-self: center;
    input[type="radio"] {
      display: none;
    }

    label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      margin-bottom: 10px;
      display: inline-block;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: -5px;
        width: 18px;
        height: 18px;
        border: 2px solid var(--color-maroon);
        border-radius: 50%;
      }
    }

    input[type="radio"]:checked + label::after {
      content: "";
      position: absolute;
      left: 5px;
      top: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--color-maroon);
    }
  }

  button:nth-child(2) {
    &:hover {
      opacity: 0.8;
    }

    img {
      width: 160px;
      height: 160px;
      border-radius: 10px;
    }
  }

  div:nth-of-type(2) {
    padding: 15px 30px;

    p:nth-of-type(1) {
      font-size: 14px;
      color: var(--color-darkgrey);
    }

    p:nth-of-type(2) {
      font-size: 18px;
      color: var(--color-black);
      padding: 10px 0;
    }

    strong {
      font-size: 16px;
      font-weight: bold;
    }

    p:nth-of-type(3) {
      font-size: 14px;
      color: var(--color-darkgrey);
      padding-top: 40px;
    }
  }

  div:nth-of-type(3) {
    justify-self: center;
    align-self: center;
    font-size: 18px;
    display: flex;

    button {
      border: 1px solid var(--color-orange);
      width: 50px;
      height: 50px;
      background-color: #f2f2f2;
      font-size: 18px;

      &:first-child {
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
      }
    }
  }

  div:nth-of-type(4) {
    display: flex;
    flex-direction: column;
    gap: 26px;
    justify-self: center;
    align-self: center;

    strong {
      font-size: 18px;
      color: var(--color-red);
      font-weight: bold;
      text-align: center;
    }

    button {
      width: 130px;
      height: 40px;
      background-color: var(--color-maroon);
      color: var(--color-lightgrey);
      border-radius: 5px;
    }
  }
`;

const DeleteBtnStyle = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  &:hover::after {
    content: "";
    position: absolute;
    top: -6px;
    right: -7px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: #000;
    opacity: 0.1;
  }
`;

const PaymentAmountCalculationStyle = styled.div`
  width: 1280px;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  margin: 80px auto 40px auto;
  padding: 42px 0;
  border-radius: 10px;
  text-align: center;

  p {
    padding-bottom: 12px;
    font-size: 16px;
  }

  strong {
    font-size: 24px;
    font-weight: bold;
  }

  span {
    font-size: 16px;
  }

  div:nth-child(1)::after {
    background: url(${iconMinus}) no-repeat center;
    content: "";
    position: absolute;
    background-color: var(--color-bg);
    width: 34px;
    height: 34px;
    transform: translate(96px, -20px);
    border-radius: 50%;
  }

  div:nth-child(2)::after {
    background: url(${iconPlus}) no-repeat center;
    content: "";
    position: absolute;
    background-color: var(--color-bg);
    width: 34px;
    height: 34px;
    transform: translate(128px, -20px);
    border-radius: 50%;
  }

  div:nth-child(4) {
    p {
      padding-bottom: 5px;
      font-size: 16px;
      font-weight: bold;
    }

    strong {
      font-size: 36px;
      color: var(--color-red);
      font-weight: bold;
    }

    span {
      font-size: 18px;
      color: var(--color-red);
    }
  }
`;

const FinalActionsStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 106px;
  position: relative;

  button {
    width: 220px;
    height: 68px;
    border-radius: 5px;
    font-size: 24px;
    font-weight: bold;

    &:hover {
      opacity: 0.9;
    }
  }

  button:nth-of-type(1) {
    color: var(--color-bg);
    background-color: var(--color-maroon);
  }

  button:nth-of-type(2) {
    color: var(--color-darkgrey);
    background-color: #f2f2f2;
    border: 1px solid var(--color-orange);

    &:hover::after {
      content: "";
      width: 220px;
      height: 68px;
      border-radius: 5px;
      background-color: var(--color-maroon);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(14px);
      opacity: 0.2;
    }
  }
`;