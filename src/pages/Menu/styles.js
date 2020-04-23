import styled from "styled-components";

export const window_width = window.innerWidth;
export const window_height = window.innerHeight;
export const small_screen = window_width < 650;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

export const Card = styled.form`
  @media only screen and (min-width: 430px) {
    display: flex;
    background-color: #bbb;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-bottom: 30px;
    height: auto;
    width: 60vw;
    border-radius: 8px;
    margin-left: 20vw;
  }
  @media screen and (max-device-width: 425px) {
    display: flex;
    background-color: #bbb;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-bottom: 30px;
    height: auto;
    width: 95vw;
    border-radius: 8px;
  }

  @media screen and (max-device-width: 370px) {
    display: flex;
    background-color: #bbb;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-bottom: 30px;
    height: auto;
    width: 95vw;
    border-radius: 8px;
  }
`;

export const Navigation = styled.div`
  @media only screen and (min-width: 430px) {
    display: flex;
    width: 60vw;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-around;
  }
  display: flex;
  justify-content: space-around;

  a {
    display: flex;
    width: 3.2rem;
    height: 3.2rem;
    background: white;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: 25px;

    font-weight: bold;
    color: black;
    text-decoration: none;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Input = styled.input`
  margin: 15px 15px;
  width: 20px;
  height: 20px;
`;

export const Icon = styled.img`
  align-self: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  margin: 15px 0;
`;

export const Text = styled.text`
  align-self: center;
  margin: 15px 0;
  font-weight: bold;
  font-size: 18px;
`;

export const Content = styled.text`
  margin: 5px 5px;
  font-weight: bold;
  font-size: 14px;
  color: #000;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  display: inline-flex;
  width: 3.2rem;
  height: 3.2rem;
  background: green;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 25px;

  font-weight: bold;
`;

export const Box = styled.div`
  display: flex;
  align-self: center;
  margin: 5px 5px;
  width: 90%;
  height: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #aaa;
  align-items: center;
  margin-right: 5px;
`;
