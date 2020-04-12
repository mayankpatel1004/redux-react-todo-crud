import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//Create Reducer

const initState = {
  name:'Mayank Patel'
};

const rootReducer = (state = initState,actions) => {
  return state;
}

//Create Actions


//Create Store
const store = createStore(rootReducer); 
window.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
serviceWorker.unregister();
