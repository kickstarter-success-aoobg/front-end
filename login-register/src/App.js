import React, {useState} from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
  
  const initialFormValues = {
    email: '',
    password: '',
    confirmPassword: ''
  }

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const initialError = '';
  const [error, setError] = useState(initialError);

  const onSubmit = (event) => {
    event.preventDefault();

    // Check if All fields are filled in

    if((!formValues.email) || (!formValues.password) || (!formValues.confirmPasword)) {
      // Failed - All fields are required
      setError('All Fields are Required');
    } else if(formValues.password !== formValues.confirmPassword) {
      // Failed - Passwords do not match
      setError('Passwords Do Not Match');
    } else {
      // YAY! We can log user in
      // REACT 2 SHOULD USE THIS SPACE TO REGISTER USER TO DATABASE
      const newUser = { ...formValues }
      setFormValues(initialFormValues);
    }
}

return (
    <Router>
    <div className="App">
      <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm
                error={error}
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
              />
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}
export default App;
