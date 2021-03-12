import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimeNavBar from './time-navbar';
// import App from './App';
import Client from './components/client'
import Project from './components/project';
import Item from './components/item';
import './App.css';
function App() {
    return (
    <div className="App">
        <TimeNavBar/>
        <Client />
        <Project />
        <Item />
        <header className="App-header">

        </header>

        </div>
    );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

