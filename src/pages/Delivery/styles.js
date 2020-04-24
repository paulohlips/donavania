import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;
  border-radius: 8px;
  margin-top: 5vh;
  padding-bottom: 2vh;
  background-color: #ccc;

  .question {
    align-self: center;
    margin-top: 5vh;
    font-weight: bold;
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 720px) {
    display: flex;
    background-color: #bbb;
    margin-top: 20px;
    flex-direction: column;

    align-items: center;
    align-self: center;
    padding-bottom: 30px;
    height: 90vh;
    width: 60vw;
    border-radius: 8px;
    margin-left: 20vw;
  }
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
  margin-top: 5vh;
`;

export const Confirm = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 8vh;
  width: 40vw;
  border-radius: 8px;
  background-color: green;
  align-self: center;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;

  @media screen and (max-device-width: 420px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8vh;
    width: 80vw;
    border-radius: 8px;
    background-color: green;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;
  }

  @media screen and (max-device-width: 370px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8vh;
    width: 80vw;
    border-radius: 8px;
    background-color: green;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;
