import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../src/components/navbar.jsx';
import Home from '../src/components/home.jsx';
import Login from '../src/components/login.jsx';
import Register from '../src/components/register.jsx';
import StadistictsChart from '../src/components/registeredAndLoguedChart.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <div>
      <Route path ='/' render= {() => <Navbar/>}/> 
      <Route exact path ='/' render= {() => <Home/>}/> 
      <Route exact path ='/login' render= {() => <Login/>}/> 
      <Route exact path ='/register' render= {() => <Register/>}/>
      <Route exact path ='/stadistics' render= {() => <StadistictsChart/>}/>  
    </div>
  );
}

export default App;