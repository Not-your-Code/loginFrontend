
import './App.css';
import Home from './components/home/Home.js';
 import Login from './components/login/Login';
import Register from './components/register/Register';
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {

const[user , setLogin] = useState(false)

const handleLogin = ()=>{
  setLogin(!user);
}




  return (
    <div className='App' >
      <BrowserRouter>
      <Switch>
        {
          !user ? <Route exact path="/" component={Login}/>: <Route path="/" component={Home}></Route>
        }
        <Route exact path="/login" render={(props) => <Login {...props}  user1={user} handleLogin={handleLogin} />} />
        <Route exact path="/register" component={Register} />
        
      </Switch>
    </BrowserRouter>

              
    </div>
  );
}

export default App;
