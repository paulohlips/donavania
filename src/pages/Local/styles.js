import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  border-radius: 8px;
  margin-top: 5vh;
  padding-bottom: 2vh;
  background-color: #aaa;

  @media only screen and (min-width: 720px) {
    display: flex;
    background-color: #aaa;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
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
  margin: 3vh 0;
  align-self: center;
`;

export const Title = styled.p`
  margin: 2vh 0;
  font-size: 2rem;
  font-weight: bold;
  align-self: center;
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

  @media screen and (max-device-width: 420px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8vh;
    width: 80vw;
    border-radius: 8px;
    background-color: green;
    color: #000;
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
  }

  span {
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const Watch = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;

  div {
    margin-bottom: 10px;
  }

  input[type="time"] {
    width: 140px;
    height: auto;

    font-weight: bold;
    font-size: 2.5rem;
    border-radius: 8px;
    margin-bottom: 10vh;
  }

  span {
    height: 5vh;
    width: 5vw;
  }

  input + span {
    padding-right: 30px;
  }

  input:invalid + span:after {
    content: "✖";
    padding-left: 2.5vw;
    font-size: 3rem;
    color: red;
  }

  input:valid + span:after {
    content: "✓";
    padding-left: 2.5vw;
    font-size: 3rem;
    color: green;
  }

  label {
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px;
  }
`;
