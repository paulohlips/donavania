import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
`;
export const Card = styled.form`
    display: flex;
    height: auto;
    width: 80%;
    margin: 30px;
    background-color: #ccc;
    flex-direction: column;
    align-self: center;
    padding-bottom: 30px;
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
    margin: 20px 0;
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
    font-size: 18px;
    color: #000;
`;

export const Box = styled.div`
    display: flex;
    align-self: center;
    margin: 5px 5px;
    width: 90%;
    height: 60px;
    border-style: solid;
    border-width: 1px;
    border-color: #aaa;
    align-items: center;
`;
