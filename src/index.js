import { ColorModeScript } from '@chakra-ui/react';
import React, {createContext, StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import UserGlobalStore from "./store/userGlobalStore";

export const Context = createContext(null)
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Context.Provider value={{ user: new UserGlobalStore() }}>
    <BrowserRouter>
      <ColorModeScript />
      <App />
    </BrowserRouter>
  </Context.Provider>
);
