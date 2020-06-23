import react, { Component } from 'react'
import {redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render = { props => {
            if(localStorage.getItem('token')){
                return <Component {...props} />
            }else{
                return <Redirect to='/Login'/>
            }
        }}/>
    )
}
export default PrivateRoute