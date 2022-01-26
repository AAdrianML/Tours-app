import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux and redux persist
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/configureStore";
import { PersistGate } from "redux-persist/lib/integration/react";
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
