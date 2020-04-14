import React from 'react';

import {
    Container,
    Image,
    Form,
    Text,
    Input,
    Button,
    LinkTo,
    Icon,
} from './styles';

import background from '../../assets/header.png';
import registro from '../../assets/id-card.svg';

export default function SignUp() {
    function handleSubmit() {}
    return (
        <Container>
            <Image alt="background" src={background} />

            <Form>
                <Text>Cadastre-se para reservar seu almoço</Text>
                <Icon alt="marmita" src={registro} />

                <Input type="text" placeholder="Seu nome" />

                <Input type="email" placeholder="Seu melhor e-mail" />

                <Input type="password" placeholder="Senha secreta" />

                <Button>Cadastrar</Button>

                <LinkTo to="/">Já sou cadastrado!</LinkTo>
            </Form>
        </Container>
    );
}
