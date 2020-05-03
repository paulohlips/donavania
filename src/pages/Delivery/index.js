import React, { useState } from "react";

import {
  Container,
  Icon,
  Title,
  Confirm,
  Box,
  Link,
  Line,
  ModalView,
  Item,
} from "./styles";
import delivery from "../../assets/food-delivery.svg";

export default function Delivery() {
  const [dinheiro, setPagamento] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <ModalView show={show} onHide={handleClose}>
        <ModalView.Header closeButton>
          <ModalView.Title>Informe os dados:</ModalView.Title>
        </ModalView.Header>
        <ModalView.Body>
          <input placeholder="Nome do cliente" />
          <input placeholder="Endereço" />
          <input placeholder="Referência" />
          <input placeholder="Telefone para contato" />
        </ModalView.Body>
        <ModalView.Footer>
          <Confirm onClick={handleClose} to={"delivery"}>
            <h5>Entregar</h5>
          </Confirm>
        </ModalView.Footer>
      </ModalView>
      <Icon src={delivery} />
      <Title>Detalhes da Entrega</Title>
      <Box>
        <Item>
          <label for="pagamento">Forma de Pagamento:</label>
          <select id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao">Cartão Crédito/Débito</option>
          </select>
        </Item>
        {dinheiro ? (
          <Item>
            <label>Precisa de troco? Para quanto?</label>
            <input placeholder="Ex: 20" />
          </Item>
        ) : null}
        <Item>
          <label for="descartavel">Material descartável:</label>
          <select id="descartavel">
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </Item>
        <span class="question">Os dados da entrega estão corretos?</span>
        <Line />
        <h5>Paulo Henrique, (61)999746197 </h5>

        <h5>QNM 17 Conjunto D casa 10</h5>
        <h5>Na rua do Sonho de Bebê</h5>
        <Line />
      </Box>
      <Confirm>Confirmar</Confirm>
      <Link onClick={handleShow}>
        <p>Entregar em outro endereço</p>
      </Link>
    </Container>
  );
}
