import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
console.log(domNode); // ???
const root = createRoot(domNode);
root.render(<App />);