/**
 * The main entry point of the React application.
 * This file sets up the React Router and renders the `Header` component.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>
);
