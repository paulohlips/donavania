import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { Container, Icon, Title, Watch, Confirm } from "./styles";

import clock from "../../assets/clock.svg";
import logo from "../../assets/logo.jpeg";

var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var time = hours + ":" + min;

export default function Local() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Icon src={logo} />
        <Modal.Header closeButton>
          <Modal.Title>Obrigado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seu pedido já vai ser preparado. Até já.</Modal.Body>
        <Modal.Footer>
          <Confirm onClick={handleClose} to={"delivery"}>
            <span>Entregar</span>
          </Confirm>
        </Modal.Footer>
      </Modal>
      <Icon src={clock} />
      <Title>Horário da Retirada</Title>
      <Watch>
        <form>
          <label for="hora-cons">De 11h30 a 14:30:</label>
          <input
            id="appt-time"
            type="time"
            name="appt-time"
            min="11:30"
            max="14:30"
            required
            pattern="[0-9]{2}:[0-9]{2}"
          />
          <span class="validity"></span>
        </form>
      </Watch>
      <Confirm onClick={handleShow}>
        <span>Confirmar Pedido</span>
      </Confirm>
    </Container>
  );
}
