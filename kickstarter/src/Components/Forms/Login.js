import React, {useState} from 'react'
import axios from 'axios'
import axiosWithAuth from '../../AxiosAuth'

const initialLogin = {username: '', password: ''}
const Login = () => {
    const [login, setLogin] = useState(initialLogin)
    console.log(login)
    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setLogin({
            ...login,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('https://kickstarter-backend-bw.herokuapp.com/api/auth/login', login)
        .then(res => {
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            window.location.assign('/dashboard')
        })
        .catch(err => {
            console.log('Did not work')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                name='username'
                placeholder='Username'
                onChange={handleChanges}
                value={login.username}/>
                <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChanges}
                value={login.password}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Login