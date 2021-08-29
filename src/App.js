import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Videos from './Components/Video';

function App() {
  return (
    <div className="App">
  <Header/>
  
  <div className='mainpage'>
  <Sidebar/>
  <Videos/>
  </div>   
     
    
</div>

  );
}

export default App;
