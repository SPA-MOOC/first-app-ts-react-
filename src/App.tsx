import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './App1';

function App() {

  const elements_tab=["Ala","Ola","Zosia","Olek"]
  return (
    <div>
      <h1>Name: John </h1>
      <ul>
      {elements_tab.map((el,index)=><li key={index}>{el}</li>)}
      </ul>
      <App1 surname="Kowalski"/>
    </div>
    
  );
}

export default App;
