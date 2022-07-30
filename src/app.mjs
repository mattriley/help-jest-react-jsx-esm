import { createRoot } from 'react-dom/client';
import React from 'react';
import Hello from './Hello.mjs';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<React.StrictMode><Hello /></React.StrictMode>);
