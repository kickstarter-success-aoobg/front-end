import React, {useState} from 'react'
import axiosWithAuth from '../../AxiosAuth'

const initialFormValues = {title: '', duration: '', amount: ''}

const AddCampaign = () => {
    const [form, setForm] = useState(initialFormValues)

    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('', form )
        .then(res => {
            console.log('Your post was successful')
        })
        .then( res => {
            console.log('redirecting to profile page')
        })
        .catch(err => {
            console.log('Your post did not go through')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                name='title'
                placeholder='Title'
                value={form.title}
                onChange={handleChanges}
                />
                <input
                name='duration'
                placeholder='Duration'
                value={form.duration}
                onChange={handleChanges}
                />
                <input
                name='amount'
                placeholder='Amount'
                value={form.amount}
                onChange={handleChanges}
                />

            </form>
        </div>
    )
}
export default AddCampaign