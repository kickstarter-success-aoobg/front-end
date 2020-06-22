import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Login from './Components/Forms/Login'
import Profile from './Components/Profile'
import SignUp from './Components/SignUp'
import DashBoard from './Components/DashBoard'
import AddCampaign from './Components/Forms/AddCampaign';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route path='/' />
        <Route path='/login' component={Login}/>
        <Route path='/addcampaign' component={AddCampaign}/>
        <Route path='/signup' component={SignUp}/>
        <PrivateRoute path='/profile' component={Profile}/>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;
