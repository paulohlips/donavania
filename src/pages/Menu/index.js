import React, { Component } from "react";

import {
  Container,
  Image,
  Card,
  Icon,
  Text,
  Input,
  Content,
  Box,
} from "./styles";

import marmita from "../../assets/chicken.svg";
import background from "../../assets/header.png";
import carnes from "../../assets/meat.svg";
import prato from "../../assets/fruit.svg";
import bebidas from "../../assets/wine.svg";

export default class Menu extends Component {
  state = {
    selected: null,
  };

  onRadioChange = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Image alt="background" src={background} />

        <Card>
          <Icon alt="marmita" src={marmita} />
          <Text>Selecione o tamanho da marmita</Text>
          <Box>
            <Input
              name="marmita"
              type="radio"
              value="pequena"
              checked={this.state.color === "pequena"}
              onChange={this.onRadioChange}
            />
            <Content>Pequena (250ml) R$7,00 - Uma opção de carne</Content>
          </Box>
          <Box>
            <Input
              name="marmita"
              type="radio"
              value="media"
              checked={this.state.color === "media"}
              onChange={this.onRadioChange}
            />
            <Content>Média (400ml) R$9,00 - Duas opções de carnes</Content>
          </Box>
          <Box>
            <Input
              name="marmita"
              type="radio"
              value="grande"
              checked={this.state.color === "grande"}
              onChange={this.onRadioChange}
            />
            <Content>Grande (750ml) R$11,00 - Duas opções de carnes</Content>
          </Box>
        </Card>

        <Card>
          <Icon alt="carnes" src={carnes} />
          <Text>Selecione a(s) carne(s)</Text>
          <Box>
            <Input
              name="carne"
              type="checkbox"
              value="bife"
              checked={this.state.color === "bife"}
              onChange={this.onRadioChange}
            />
            <Content>Bife Acebolado</Content>
          </Box>
          <Box>
            <Input
              name="carne"
              type="checkbox"
              value="peito"
              checked={this.state.color === "peito"}
              onChange={this.onRadioChange}
            />
            <Content>Peito de Frango Grelhado</Content>
          </Box>
          <Box>
            <Input
              name="carne"
              type="checkbox"
              value="bisteca"
              checked={this.state.color === "bisteca"}
              onChange={this.onRadioChange}
            />
            <Content>Bisteca Suína</Content>
          </Box>
          <Box>
            <Input
              name="carne"
              type="checkbox"
              value="lasanha"
              checked={this.state.color === "lasanha"}
              onChange={this.onRadioChange}
            />
            <Content>Lasanha de Frango</Content>
          </Box>
        </Card>

        <Card>
          <Icon alt="prato" src={prato} />

          <Text>Selecione os acompanhamentos</Text>
          <p>No mínimo um!</p>
          <Box>
            <Input
              name="arroz"
              type="checkbox"
              value="arroz"
              /*  checked={this.state.color === "arroz"} */
              onChange={this.onRadioChange}
            />
            <Content>Arroz</Content>
          </Box>
          <Box>
            <Input
              name="feijão"
              type="checkbox"
              value="feijão"
              /* checked={this.state.color === "feijão"} */
              onChange={this.onRadioChange}
            />
            <Content>Feijão Carioca</Content>
          </Box>
          <Box>
            <Input
              name="macarrao"
              type="checkbox"
              value="macarrao"
              /* checked={this.state.color === "macarrao"} */
              onChange={this.onRadioChange}
            />
            <Content>Macarrão Alho e Óleo</Content>
          </Box>
          <Box>
            <Input
              name="farofa"
              type="checkbox"
              value="farofa"
              /*  checked={this.state.color === "farofa"} */
              onChange={this.onRadioChange}
            />
            <Content>Farofa</Content>
          </Box>
          <Box>
            <Input
              name="batata"
              type="checkbox"
              value="batata"
              checked={this.state.color === "batata"}
              onChange={this.onRadioChange}
            />
            <Content>Batata Gratinada</Content>
          </Box>
          <Box>
            <Input
              name="salada"
              type="checkbox"
              value="salada"
              /*  checked={this.state.color === "salada"} */
              onChange={this.onRadioChange}
            />
            <Content>Salada: Mix de Folhas</Content>
          </Box>
        </Card>

        <Card>
          <Icon alt="bebidas" src={bebidas} />
          <Text>Bebidas e Sobremesas</Text>
          <Box>
            <Input
              name="marmita"
              type="radio"
              value="pequena"
              /* checked={this.state.color === "pequena"} */
              onChange={this.onRadioChange}
            />
            <Content>Cola-cola lata 310ml</Content>
          </Box>
          <Box>
            <Input
              name="marmita"
              type="radio"
              value="media"
              /*  checked={this.state.color === "media"} */
              onChange={this.onRadioChange}
            />
            <Content>Guaraná Antarctica 1L</Content>
          </Box>
          <Box>
            <Input
              name="marmita"
              type="radio"
              value="grande"
              /* checked={this.state.color === "grande"} */
              onChange={this.onRadioChange}
            />
            <Content>Pudim de Leite Condensado</Content>
          </Box>
        </Card>
      </Container>
    );
  }
}
