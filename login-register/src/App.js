import React, {useState} from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
  
  const initialFormValues = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  const initialFormValuesLogin = {
    username: '',
    password: ''
  }

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formValuesLogin,setFormValuesLogin] = useState(initialFormValuesLogin);
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onInputChangeLogin = event => {
    const name = event.target.name
    const value= event.target.value
    setFormValuesLogin({
      ...formValuesLogin,
      [name]: value,
    })
  }

  // const initialError = '';
  // const [error, setError] = useState(initialError);

  const onSubmit = (event) => {
    event.preventDefault();

    // setUser(event.target);
}

// const initialErrorLogin = '';
// const [errorLogin, setErrorLogin] = useState(initialErrorLogin);

const onSubmitLogin = (event) => {
  event.preventDefault();

  // setUser(event.target);
}

return (
    <div className="App">
      <Header/>
        <div className="container d-flex align-items-center flex-column" style={{width:"100%"}}>
              <RegistrationForm
                // error={error}
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
              />
              <LoginForm
                // error={errorLogin}
                values={formValuesLogin}
                onInputChange={onInputChangeLogin}
                onSubmit={onSubmitLogin}
              />
       </div>
   </div>
  )  
}
export default App;
