import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import delteBtn from "../assets/images/icon-delete.svg";

export default function Modal({ closeModal, modalTxt }) {
  const navigate = useNavigate();

  const handleRightBtnClick = () => {
    navigate("/shoppingcart");
  };

  return (
    <ModalBgStyle>
      <ModalStyle>
        <div>
          {modalTxt.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <AnswerActionStyle>
          <button type="button" onClick={closeModal}>
            아니오
          </button>
          <button type="button" onClick={handleRightBtnClick}>
            예
          </button>
        </AnswerActionStyle>
        <button type="button">
          <img src={delteBtn} alt="닫기버튼" onClick={closeModal} />
        </button>
      </ModalStyle>
    </ModalBgStyle>
  );
}

const ModalBgStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const ModalStyle = styled.div`
  min-width: 360px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--color-lightgrey);
  transform: translate(-50%, -50%);
  border: 1px solid var(--color-grey);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 10px;

  p {
    font-size: 16px;
    line-height: 20px;
  }

  button:nth-child(3) {
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
  }
`;

const AnswerActionStyle = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;

  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    margin-top: 30px;
  }

  button:nth-child(1) {
    background-color: var(--color-lightgrey);
    border: 1px solid var(--color-orange);
    color: var(--color-darkgrey);
  }

  button:nth-child(2) {
    background-color: var(--color-maroon);
    color: var(--color-lightgrey);
  }
`;