import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimeNavBar from './time-navbar';
// import App from './App';
import Client from './components/client'
import Project from './components/project';
import Item from './components/item';
import Work from './components/work';
import './App.css';



function App() {
 var clientData = [
    {
        clientId: 0,
        clientName: "Solar Wind",
        clientAddress : "333 Security Ave",
        contact : {
            phone: "5032221234",
            email: "BillMurry@Nike.com",
            name: "Bill Murry"
        }
    },
    {
        clientId: 1,
        clientName: "Nike",
        clientAddress: "123 Nike Way",
        contact: {
            phone: "1231231234",
            name: "Billy Crystal",
            email: "billy@nike.com"
        }
    }
    ];   
    
    return (
    <div className="App">
        <TimeNavBar/>
        <Client 
            name={clientData[0].clientName}
            address = {clientData[0].clientAddress}/>
        <Item itemId={1} projectId={0} name="scaffolding" description="code scaffolding"/>  
        <Project 
            id={0} 
            name="This Project Name" 
            description ="sample project description"
        />
        <Work />
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

