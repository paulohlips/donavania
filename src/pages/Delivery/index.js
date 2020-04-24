import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { Container, Icon, Title, Confirm, Box, Link } from "./styles";
import delivery from "../../assets/food-delivery.svg";

export default function Delivery() {
  const [dinheiro, setPagamento] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dados da Entrega</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input />
          <input />
          <input />
          <input />
        </Modal.Body>
        <Modal.Footer>
          <Confirm onClick={handleClose} to={"delivery"}>
            <span>Entregar</span>
          </Confirm>
        </Modal.Footer>
      </Modal>
      <Icon src={delivery} />
      <Title>Detalhes da Entrega</Title>
      <Box>
        <label for="pagamento">Forma de Pagamento:</label>
        <select id="pagamento">
          <option value="dinheiro">Dinhiro</option>
          <option value="cartao">Cartão Crédito/Débito</option>
        </select>
        {dinheiro ? (
          <div>
            <span>Troco para quanto? Para quanto?</span>
            <input />
          </div>
        ) : null}
        <label for="descartavel">Material descartável:</label>
        <select id="descartavel">
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <span>Paulo Henrique, (61)999746197 </span>

        <span>QNM 17 Conjunto D casa 10</span>
        <span>Na rua do Sonho de Bebê</span>
        <span class="question">O endereço está correto?</span>
      </Box>
      <Confirm>Confirmar</Confirm>
      <Link onClick={handleShow}>Entregar em outro endereço</Link>
    </Container>
  );
}
