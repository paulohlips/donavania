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

import history from '../../services/history';

import background from '../../assets/header.png';
import marmita from '../../assets/lancheira.png';

export default function SignIn() {
    function handleSubmit() {
        history.push('/menu');
    }
    return (
        <Container>
            <Image alt="background" src={background} />

            <Form>
                <Text>Entre e faça seu pedido</Text>
                <Icon alt="marmita" src={marmita} />

                <Input type="email" placeholder="Digite seu e-mail" />

                <Input type="password" placeholder="Digite sua senha" />

                <Button onClick={handleSubmit}>Entrar</Button>

                <LinkTo to="/SignUp">Criar conta gratuita</LinkTo>
            </Form>
        </Container>
    );
}
