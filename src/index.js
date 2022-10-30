import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('App rendered!!');
  });

  return <App tab="home" />
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
