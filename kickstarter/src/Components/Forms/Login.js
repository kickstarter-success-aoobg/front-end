import React, {useState} from 'react'
import axios from 'axios'
import axiosWithAuth from '../../AxiosAuth'

const initialValues = {fname: '' ,lname: '', username: '', password: ''}
const initialLogin = {username: '', password: ''}
const Login = () => {
    const [form, setForm] = useState(initialValues)
    const [login, setLogin] = useState(initialLogin)

    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setLogin({
            ...login,
            [name]: value
        })

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('https://kickstarter-backend-bw.herokuapp.com/api/auth/login', login)
        .then(res => {
            
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                name='lname'
                placeholder='First Name'
                onChange={handleChanges}
                value={form.fname}/>
                <input
                name='lnme'
                placeholder='Last Name'
                onChange={handleChanges}
                value={form.lname}/>
                <input
                name='username'
                placeholder='Username'
                onChange={handleChanges}
                value={form.username}/>
                <input
                name='password'
                placeholder='Password'
                onChange={handleChanges}
                value={form.password}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Login