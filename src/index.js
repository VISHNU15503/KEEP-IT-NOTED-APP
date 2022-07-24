import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";

const rootItem = createRoot(document.getElementById("root"))
rootItem.render(<App />);
