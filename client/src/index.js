import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BrandStore from './store/brandStore';
import DeviceStore from './store/deviceStore';
import TypeStore from './store/typeStore';
import UserStore from './store/userStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
        type: new TypeStore(),
        brand: new BrandStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
