import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Videos from './Components/Video';
import {Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
<div className="App">
<Router>
  <Header/>

<Switch>
<Route path='/search/:searhTerm'>



  <Route path='/'>
  <div className='mainpage'>
  <Sidebar/>
  <Videos/>
  </div> 
  </Route>  
</Switch>     

</Router>    
</div>
  );
}

export default App;
