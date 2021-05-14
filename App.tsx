import React from 'react';
import Routes from './src/routers';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <React.Fragment>
                <Routes />
            </React.Fragment>
        </Provider>
    );
};

export default App;