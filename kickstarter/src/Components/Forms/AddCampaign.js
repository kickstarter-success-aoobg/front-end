import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../AxiosAuth'

const initialFormValues = {category: '', description: '', duration: 0, amount: 0, name: '' }
const initialCampaignData = {user_id: 0, name: "", description: "", campaign_length: 0, category: "", monetary_goal: 0, success_prediction: 0}
const AddCampaign = (props) => {
    const [metrics, setMetrics] = useState(initialFormValues)
    const [campaignData, setCampaignData] = useState('')
    const [userId, setUserId] = useState(0)
    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setMetrics({
            ...metrics,
            [name]: value
        })
    }
    
    useEffect(()=>{
        axiosWithAuth()
        .get('https://kickstarter-backend-bw.herokuapp.com')
        .then(res => {
            setUserId(res.data)
        })
    }, [])
    // const newCampaign = () => {
    //     axiosWithAuth()
    //         .post('https://kickstarter-backend-bw.herokuapp.com/api/campaigns/', campaignData)
    //         .then(res => {
    //             console.log('Post was successful')

    //         })
    // }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('https://ds-kickstarter-predict.herokuapp.com/predict', metrics )
        .then(res => {
            console.log('Your post was successful')

            console.log(res.data)
        })
        .then(() => {
            console.log('redirecting to profile page')
        })
        .catch(err => {
            console.log('Your post did not go through')
        })

        axiosWithAuth()
            .post('https://kickstarter-backend-bw.herokuapp.com/api/campaigns/', campaignData)
            .then(res => {
                console.log('Post was successful')

            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select 
                value={metrics.category}
                onChange={handleChanges}
                name='category'>
                    <option value=''>- Select an Option</option>
                    <option value='tech'>Art</option>
                    <option value='art'>Craft</option>
                    <option value='games'>Comics</option>
                    <option value='Dance'>Dance</option>
                    <option value='Design'>Design</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Film'>Film | Video</option>
                    <option value='Food'>Food</option>
                    <option value='Games'>Games</option>
                    <option value='Journalism'>Journalism</option>
                    <option value='Music'>Music</option>
                    <option value='Photography'>Photography</option>
                    <option value='Publishing'>Publishing</option>
                    <option value='Technology'>Technology</option>
                    <option value='Theater'>Theater</option>
                </select>
                <input
                name='description'
                placeholder='Description'
                value={metrics.description}
                onChange={handleChanges}
                />
                <input
                name='duration'
                placeholder='Duration'
                value={metrics.duration}
                onChange={handleChanges}
                />
                <input
                name='amount'
                placeholder='$ Goal'
                value={metrics.amount}
                onChange={handleChanges}
                />
                <input
                name='name'
                placeholder='Name of Campaign'
                value={metrics.name}
                onChange={handleChanges}
                />
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
export default AddCampaign