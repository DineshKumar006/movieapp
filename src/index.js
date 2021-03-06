import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import FavReducer from './reducer/addFavReducer'
import SeriesFavReducer from './reducer/addSeriesFavReducer'



const rootReducer=combineReducers({
  favData:FavReducer,
  SeriesfavData:SeriesFavReducer
 

})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
rootReducer,
composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
