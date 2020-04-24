import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import {
  Container,
  DetailsBox,
  Icon,
  Title,
  OrderDetails,
  ButtonMore,
  ButtonFinalize,
  Total,
  Item,
} from "./styles";

import cart from "./../../assets/supermarket.svg";

export default function Details() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Me diz uma coisa,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você vem buscar ou prefere que a gente leve até você?
        </Modal.Body>
        <Modal.Footer>
          <ButtonFinalize onClick={handleClose} to={"delivery"}>
            <span>Entregar</span>
          </ButtonFinalize>
          <ButtonMore onClick={handleClose} to={"local"}>
            <span>Retirar no Restaurante</span>
          </ButtonMore>
        </Modal.Footer>
      </Modal>
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
        <ButtonMore to="menu">
          <span>Comprar Mais</span>
        </ButtonMore>
        <ButtonFinalize onClick={handleShow}>
          <span>Finalizar Pedido</span>
        </ButtonFinalize>
      </DetailsBox>
    </Container>
  );
}
