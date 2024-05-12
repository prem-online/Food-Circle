// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Main/Home';
function App() {
  return (
    <>
      <Home/>
    </>
);
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);