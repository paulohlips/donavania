import React, { Component } from 'react';

import { Container, Card, Icon, Text, Input, Content, Box } from './styles';

import marmita from '../../assets/lancheira.png';
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
                <Card>
                    <Icon alt="marmita" src={marmita} />
                    <Text>Selecione o tamanho da marmita</Text>
                    <Box>
                        <Input
                            name="radio"
                            type="radio"
                            value="pequena"
                            checked={this.state.color === 'pequena'}
                            onChange={this.onRadioChange}
                        />
                        <Content>
                            Pequena (250ml) R$7,00 - Uma opção de carne
                        </Content>
                    </Box>
                    <Box>
                        <Input
                            name="radio"
                            type="radio"
                            value="media"
                            checked={this.state.color === 'media'}
                            onChange={this.onRadioChange}
                        />
                        <Content>
                            Média (400ml) R$9,00 - Duas opções de carnes
                        </Content>
                    </Box>
                    <Box>
                        <Input
                            name="radio"
                            type="radio"
                            value="grande"
                            checked={this.state.color === 'grande'}
                            onChange={this.onRadioChange}
                        />
                        <Content>
                            Grande (750ml) R$11,00 - Duas opções de carnes
                        </Content>
                    </Box>
                </Card>
            </Container>
        );
    }
}
