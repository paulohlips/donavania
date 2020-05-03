import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  border-radius: 8px;
  margin-top: 5vh;
  padding-bottom: 2vh;
  background-color: #aaa;

  .question {
    align-self: center;
    margin-top: 5vh;
    font-weight: bold;
    font-size: 1.1rem;
  }

  label {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 10px;
  }

  input {
    height: 3vh;
    width: auto;
    font-size: 0.9rem;
    font-weight: bold;
  }

  @media only screen and (min-width: 720px) {
    display: flex;
    background-color: #aaa;
    margin-top: 20px;
    flex-direction: column;

    align-items: center;
    align-self: center;
    padding-bottom: 30px;
    height: 95vh;
    width: 60vw;
    border-radius: 8px;
    margin-left: 20vw;
  }

  @media screen and (max-device-width: 376px) {
    display: flex;
    background-color: #aaa;
    margin-top: 20px;
    flex-direction: column;

    align-items: center;
    padding-bottom: 30px;
    height: auto;
    border-radius: 8px;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 98%;
  height: 3px;
  background-color: #bbb;
  margin-bottom: 1vh;
`;

export const Icon = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 2vh 0;
  align-self: center;
`;

export const Title = styled.p`
  margin: 1vh 0;
  font-size: 1.5rem;
  font-weight: bold;
  align-self: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 0;
  padding: 0 3vw;

  span {
    margin: 1vh 0;
    padding: 0 3vw;
    font-size: bold;
  }
`;

export const Link = styled.a`
  font-weight: bold;
  align-self: center;
  margin: 3vh 0;

  p {
    color: red;
  }
`;

export const Confirm = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 8vh;
  width: 40vw;
  background-color: green;
  align-self: center;
  color: #000;
  font-size: 1rem;
  font-weight: bold;

  @media screen and (max-device-width: 425px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8vh;
    width: 80vw;
    background-color: green;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;
  }

  @media screen and (max-device-width: 375px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8vh;
    width: 80vw;
    background-color: green;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const ModalView = styled(Modal)`
  input {
    height: 5vh;
    width: 99%;
    margin: 5px 0;
    border-width: 2px;
    border-radius: 8px;
    padding: 0 5px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;

  select {
    margin: 1.2vh 2vw;
    height: 3vh;
    width: 45%;
    font-size: 0.9rem;
    font-weight: bold;
  }

  input {
    margin: 1.2vh 2vw;
    height: 3.5vh;
    width: 30%;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;
