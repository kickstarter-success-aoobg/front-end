import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Login from './Components/Forms/Login'
import SignUp from './Components/Forms/SignUp'
import Dashboard from './Components/Dashboard'
import AddCampaign from './Components/Forms/AddCampaign';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { CampaignProvider} from './Components/CampaignContext'
import UpdateProfile from './Components/Forms/UpdateProfile';
import Edit from './Components/Forms/Edit'

function App() {

  
  
  return (
   <Router> 
     <CampaignProvider>
      
        <div className="App">
        <NavBar />
        
          <Switch>
            <Route exact path='/' />
            <Route exact path='/login'><Login /></Route>
            <Route exact path='/addcampaign' component={AddCampaign}/>
            <Route exact path='/signup'><SignUp /></Route>
            <Route exact path ='/updateprofile' component={UpdateProfile}/>
            <Route exact path='/edit/:id' component={Edit}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          </Switch>
        
        <Footer />
      </div>
     
    </CampaignProvider>
     </Router>
  );
}

export default App;
