import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer,{rootSaga} from './modules/index';
import { composeWithDevTools } from '../../../node_modules/redux-devtools-extension/index';
import createSagaMiddleware from 'redux-saga';
import { check, tempSetUser } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';

const sagaMiddleware=createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser(){
  try{
    const user=localStorage.getItem('user');
    if(!user) return;  //로그인 상태가 아니라면 아무것도 안함
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  }catch(e){
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <HelmetProvider>
      <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
);