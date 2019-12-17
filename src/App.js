import React from 'react';
import './App.styles.scss';
import NavBar from './components/navbar/navbar.component';
import { default as IntrumentCollectionPage } from './components/Instruments/instruments.container';

function App() {
  return (
    <div className="container-fluid App-container">
      <div className='row App-container-row'>
        <div className='col-12 App-container-row-header'>
          <NavBar />
        </div>
        <div className='col-12 App-container-row-content'>
         <IntrumentCollectionPage />
        </div>
      </div>
    </div>
)};

export default App;
