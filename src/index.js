import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Component1 from './component1';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 检测代码正确性
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const test = ReactDOM.createRoot(document.getElementById("test"));
test.render(
  <div>
    <div>hello,world</div>
    <Component1></Component1>
  </div>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
