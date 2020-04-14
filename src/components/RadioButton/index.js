import React, { Component } from 'react';

import { ButtonContainer } from './styles';

export default class RadioButton extends Component {
    render() {
        const { value, content } = this.props;
        return (
            <ButtonContainer>
                <input type="radio" value={value} />
                <p>{content}</p>
            </ButtonContainer>
        );
    }
}
