import { createRoot } from 'react-dom/client';
import React from 'react';
import HelloWorld from './HelloWorld.mjs';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<React.StrictMode><HelloWorld /></React.StrictMode>);
