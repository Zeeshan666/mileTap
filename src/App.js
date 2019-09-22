import React, { Component } from 'react';
import {BrowserRouter,Route,Switch ,Redirect} from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Post from './Component/Post'
import SignIn from './Component/SignIn';

class App extends Component {
  render() {
    return (
    
      <BrowserRouter>
      <div className="App">
       <Navbar/>
        <Switch>
        <Route exact path='/home' component={Home}  />
        <Route exact path='/' component={SignIn}  /> 
       <Route exact path='/:post_id' component={Post}/>
       <Redirect to='/home' component={Home} />
       </Switch>
      </div>
      </BrowserRouter>
      

      
    );
  }
}


export default App;
