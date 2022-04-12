import React from 'react';
import { render } from 'react-dom';
import App from "../components/App";

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.body.appendChild(document.createElement("div")));
  // render(<App />, document.getElementById('root'));
})