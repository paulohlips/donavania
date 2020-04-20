import React, { Component } from "react";

import {
  Container,
  DetailsBox,
  Icon,
  Title,
  OrderDetails,
  ButtonMore,
  ButtonFinalize,
  ButtonContent,
  Total,
  Item,
} from "./styles";

import cart from "./../../assets/supermarket.svg";

export default class Details extends Component {
  render() {
    return (
      <Container>
        <DetailsBox>
          <Icon src={cart} />
          <Title>Detalhes do Pedido</Title>

          <OrderDetails>
            <Item>
              <p>1-Marmita G </p> <p>R$11,00</p>
            </Item>
            <Item>
              <p>1-Suco 500ml </p> <p>R$3,50</p>
            </Item>
            <Item>
              <p>1-Pudim </p> <p>R$3,00</p>
            </Item>
          </OrderDetails>
          <Total>Total R$17,50</Total>
          <ButtonMore>
            <ButtonContent>Comprar Mais</ButtonContent>
          </ButtonMore>
          <ButtonFinalize>
            <ButtonContent>Finalizar Pedido</ButtonContent>
          </ButtonFinalize>
        </DetailsBox>
      </Container>
    );
  }
}
