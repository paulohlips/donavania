import React from 'react';

// import { Container } from './styles';
import RadioButton from '../../components/RadioButton';

export default function Cart() {
    return (
        <div>
            <RadioButton value="apple" content={'Marmita pequena'} />
            <RadioButton value="apple" content={'Marmita media'} />
            <RadioButton value="apple" content={'Marmita grande'} />
            <input type="radio" value={'value'} />
            <input type="radio" value={'value'} />
            <input type="radio" value={'value'} />
        </div>
    );
}
