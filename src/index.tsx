import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductPage from './page/ProductPage';
import {Provider} from 'react-redux'
import store from './store';
import {initializeApp} from 'firebase/app';
import AnketPage from './page/AnketPage';

const firebaseConfig = {
  apiKey: "AIzaSyBAVlmyXzy3q-4Us5c9h2n2cRxfdamH23w",
  authDomain: "odevuygulamasi.firebaseapp.com",
  databaseURL: "https://odevuygulamasi.firebaseio.com",
  projectId: "odevuygulamasi",
  storageBucket: "odevuygulamasi.firebasestorage.app",
  messagingSenderId: "211916203523",
  appId: "1:211916203523:web:0c03d9c2fa0db12324d036"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <AnketPage />
  </Provider>
  
);
