import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/globals';

import history from './services/history';

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes history={history} />
        </>
    );
}

export default App;
