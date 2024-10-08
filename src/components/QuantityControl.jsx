import React, { useState } from "react";
import styled from "styled-components";
import decreaseBtn from "../assets/images/icon-minus-line.svg";
import increaseBtn from "../assets/images/icon-plus-line.svg";

export default function QuantityControl({
  item,
  initialQuantity,
  onQuantityChange,
}) {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleIncrease = () => {
    if (quantity < item.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <ProductQuantityControlStyle>
      <DecreaseBtnStyle type="button" onClick={handleDecrease}>
        <img src={decreaseBtn} alt="수량감소버튼" />
      </DecreaseBtnStyle>
      <button type="button">{quantity}</button>
      <IncreaseBtnStyle type="button" onClick={handleIncrease}>
        <img src={increaseBtn} alt="수량추가버튼" />
      </IncreaseBtnStyle>
    </ProductQuantityControlStyle>
  );
}

const ProductQuantityControlStyle = styled.div`
  font-size: 18px;
  display: flex;

  button {
    border: 1px solid var(--color-orange);
    width: 50px;
    height: 50px;
    background-color: var(--color-lightgrey);
    font-size: 18px;
  }
`;

const DecreaseBtnStyle = styled.button`
  border-radius: 5px 0 0 5px;
  &:active {
    background-color: var(--color-maroon);
  }
`;

const IncreaseBtnStyle = styled.button`
  border-radius: 0 5px 5px 0;
  &:active {
    background-color: var(--color-maroon);
  }
`;
