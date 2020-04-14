import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    flex-direction: column;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Form = styled.div`
    display: flex;
    background-color: #eee;
    align-self: center;
    width: auto;
    height: auto;
    flex-direction: column;
    margin: 80px 0;
    padding: 10px;
    border-radius: 10px;
`;
export const Text = styled.text`
    align-self: center;
    font-weight: bold;
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 10px;
`;
export const Input = styled.input`
    width: 300px;
    height: 40px;
    margin: 8px;
    border-radius: 10px;
    align-self: center;
    padding: 10px;
    font-weight: bold;
    border: 0;
`;
export const Button = styled.button`
    margin-top: 20px;
    width: 50%;
    align-self: center;
    height: 40px;
    border-radius: 10px;
    background-color: #4bb543;
    margin-bottom: 20px;
    border: 0;
    text-transform: uppercase;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
        background: ${darken(0.05, '#4bb543')};
    }
`;

export const LinkTo = styled(Link)`
    align-self: center;
    font-size: 12px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 5px;
    color: #000;
`;

export const Icon = styled.img`
    height: 50px;
    width: 50px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 40px;
`;
