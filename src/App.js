import React from 'react';

import './App.styles.scss';
import NavBar from './components/navbar/navbar.component';

function App() {
  return (
    <div className="container-fluid App-container">
      <div className='row App-container-row'>
        <div className='col-12 App-container-row-header'>
          <NavBar />
        </div>
        <div className='col-12 App-container-row-content'>
         
        </div>
      </div>
    </div>
)};

export default App;
