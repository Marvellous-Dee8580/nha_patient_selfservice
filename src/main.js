import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Change to .js extension if App is a JS file
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  React.createElement(StrictMode, null, 
    React.createElement(App, null)
  )
);