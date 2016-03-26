import React from 'react';
import ReactDOM from 'react-dom';
import {CreateStore} from 'redux';
import {Provider} from 'react-redux';

// import App from './components/app'
import App from 'components/app'
// import reducers from './reducers';
import reducers from 'reducers';

const initialState = window.INITIAL_STATE;
const store = CreateStore(reducers(initialState));

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('app')
);
