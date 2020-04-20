import React, { Component } from "react";

import {
  Image,
  Card,
  Icon,
  Text,
  Input,
  Content,
  Box,
  Navigation,
  Container,
  Button,
} from "./styles";

import "./styles.css";

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
        <div class="slider">
          <div class="slides">
            <div id="slide-1">
              <div>
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
                    <Content>
                      Pequena (250ml) R$7,00 - Uma opção de carne
                    </Content>
                  </Box>
                  <Box>
                    <Input
                      name="marmita"
                      type="radio"
                      value="media"
                      checked={this.state.color === "media"}
                      onChange={this.onRadioChange}
                    />
                    <Content>
                      Média (400ml) R$9,00 - Duas opções de carnes
                    </Content>
                  </Box>
                  <Box>
                    <Input
                      name="marmita"
                      type="radio"
                      value="grande"
                      checked={this.state.color === "grande"}
                      onChange={this.onRadioChange}
                    />
                    <Content>
                      Grande (750ml) R$11,00 - Duas opções de carnes
                    </Content>
                  </Box>
                </Card>
              </div>
            </div>
            <div id="slide-2">
              <div>
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
              </div>
            </div>
            <div id="slide-3">
              <div>
                <Card>
                  <Icon alt="prato" src={prato} />

                  <Text>Selecione os acompanhamentos</Text>
                  <Content>No mínimo um!</Content>
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
              </div>
            </div>
            <div id="slide-4">
              <div>
                <Card>
                  <Icon alt="bebidas" src={bebidas} />
                  <Text>Bebidas e Sobremesas</Text>
                  <Box>
                    <Input
                      name="marmita"
                      type="checkbox"
                      value="pequena"
                      /* checked={this.state.color === "pequena"} */
                      onChange={this.onRadioChange}
                    />
                    <Content>Cola-cola lata 310ml</Content>
                  </Box>
                  <Box>
                    <Input
                      name="marmita"
                      type="checkbox"
                      value="media"
                      /*  checked={this.state.color === "media"} */
                      onChange={this.onRadioChange}
                    />
                    <Content>
                      Média (400ml) R$9,00 - Duas opções de carnes
                    </Content>
                  </Box>
                  <Box>
                    <Input
                      name="marmita"
                      type="checkbox"
                      value="grande"
                      /* checked={this.state.color === "grande"} */
                      onChange={this.onRadioChange}
                    />
                    <Content>
                      Grande (750ml) R$11,00 - Duas opções de carnes
                    </Content>
                  </Box>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Navigation>
          <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <Button>Fim</Button>
        </Navigation>
      </Container>
    );
  }
}
