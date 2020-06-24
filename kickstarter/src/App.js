import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Login from './Components/Forms/Login'
import Profile from './Components/Profile'
import SignUp from './Components/Forms/SignUp'
import Dashboard from './Components/Dashboard'
import AddCampaign from './Components/Forms/AddCampaign';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { ProfileProvider} from './Components/ProfileContext'
import UpdateProfile from './Components/Forms/UpdateProfile';

function App() {

  let myId = localStorage.getItem('userId')
  console.log(myId)
  return (
   <Router> 
     <ProfileProvider>
      
        <div className="App">
        <NavBar />
        
          <Switch>
            <Route exact path='/' />
            <Route exact path='/login'><Login /></Route>
            <Route exact path='/addcampaign' component={AddCampaign}/>
            <Route exact path='/signup'><SignUp /></Route>
            <Route exact path ='/updateprofile' component={UpdateProfile}/>
            <PrivateRoute exact path='/profile' component={Dashboard}/>
            {/* <Route exact path='/dashboard' component={Dashboard}/> */}
          </Switch>
        
        <Footer />
      </div>
     
    </ProfileProvider>
     </Router>
  );
}

export default App;
