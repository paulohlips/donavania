import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #bbb;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  justify-content: center;

  @media screen and (min-device-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    justify-content: center;
  }
`;

export const Title = styled.p`
  margin: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  align-self: center;
`;

export const Icon = styled.img`
  height: 3rem;
  width: 3rem;
  align-self: center;
`;

export const OrderDetails = styled.div`
  @media screen and (min-device-width: 1000px) {
    height: auto;
    width: 60vw;
    margin: 20px;
  }
  flex-direction: column;
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 0;

  border-top: 0.5px solid rgb(150, 150, 150);
  border-bottom: 0.5px solid rgb(150, 150, 150);

  p {
    margin: 10px 0;
  }
`;

export const Total = styled.p`
  display: flex;
  align-self: right;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 60%;
`;

export const Item = styled.p`
  display: flex;
  justify-content: space-between;
`;
export const ButtonMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 8vh;
  width: 40vw;
  margin: 15px 0;
  border-radius: 8px;
  margin-top: 80px;
  align-self: center;
  background-color: #ccc;
  color: #000;

  @media screen and (max-device-width: 420px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8vh;
    width: 80vw;
    margin: 15px 0;
    border-radius: 8px;
    margin-top: 180px;
    background-color: #ccc;
    color: #000;
  }

  @media screen and (max-device-width: 370px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8vh;
    width: 80vw;
    margin: 15px 0;
    border-radius: 8px;
    background-color: #ccc;
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

export const ButtonFinalize = styled(Link)`
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
