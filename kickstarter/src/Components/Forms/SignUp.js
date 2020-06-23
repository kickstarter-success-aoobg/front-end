import React, {useState} from 'react'
import axios from 'axios'
import axiosWithAuth from '../../AxiosAuth'

// const initialValues = {fname: '' ,lname: '', username: '', password: ''}
const initialLogin = {username: '', password: ''}
const SignUp = () => {
    // const [form, setForm] = useState(initialValues)
    const [signup, setSignup] = useState(initialLogin)
    // console.log(form)
   
    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setSignup({
            ...signup,
            [name]: value,
           
        })

        // setForm({
        //     ...form,
        //     [name]: value
        // })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('https://kickstarter-backend-bw.herokuapp.com/api/auth/register', signup)
        .then(res => {
            console.log(res)
            // localStorage.setItem('token', res.payload)
            // window.location.assign('/login')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* <input
                name='fname'
                placeholder='First Name'
                onChange={handleChanges}
                value={form.fname}/>
                <input
                name='lname'
                placeholder='Last Name'
                onChange={handleChanges}
                value={form.lname}/> */}
                <input
                name='username'
                placeholder='Username'
                onChange={handleChanges}
                value={signup.username}/>
                <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChanges}
                value={signup.password}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default SignUp