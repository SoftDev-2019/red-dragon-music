import React from 'react';
import './App.styles.scss';
import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import Routes from './components/Routes/routes.component';



function App() {
  return (
    <div className='App'>
      <div className="container-fluid App-container">
        <div className='row App-container-row'>
          <div className='col-12 App-container-row-header'>
            <NavBar />
          </div>
          <div className='col-12 App-container-row-content'>
            <Routes />
          </div>
        </div>
      </div>
      <Footer />
    </div>
)};

export default App;
