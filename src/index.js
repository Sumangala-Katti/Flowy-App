import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CanvasDiv from './Component/CanvasDiv';
import NavBar from './Component/Navbar';
import LeftSidebar from './Component/LeftSidebar';
import ContentDiv from './Component/ContentDiv';


ReactDOM.render(
  <React.StrictMode>
    <CanvasDiv/>
    <NavBar/>
    <LeftSidebar/>
    <ContentDiv/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
