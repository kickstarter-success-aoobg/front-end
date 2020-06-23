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
import { ProfileProvider} from './Components/ProfileContext'
import UpdateProfile from './Components/Forms/UpdateProfile';

function App() {
  return (
    <ProfileProvider>
      <div className="App">
        <NavBar />
        <Router>
          <Route path='/' />
          <Route path='/login' component={Login}/>
          <Route path='/addcampaign' component={AddCampaign}/>
          <Route path='/signup' component={SignUp}/>
          <Route path ='/updateprofile' component={UpdateProfile}/>
          <PrivateRoute path='/profile' component={Profile}/>

        </Router>
        <Footer />
      </div>
    </ProfileProvider>
  );
}

export default App;
