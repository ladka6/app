import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

const container = document.getElementById('root');
ReactDOM.createRoot(container).render(<App />);