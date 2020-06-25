import React, {useState, useEffect, useContext} from 'react'
import axiosWithAuth from '../../AxiosAuth'
import { CampaignContext } from '../CampaignContext'

const initialFormValues = {category: '', blurb: '', campaign_length: 0, usd_goal: 0, name: '' }
const initialCampaignData = {user_id: 0, name: "", description: "", campaign_length: 0, category: "", monetary_goal: 0, success_prediction: 0}
const AddCampaign = (props) => {
    const [campaignId, setCampaignId] = useContext(CampaignContext)
    console.log(campaignId)
    const [metrics, setMetrics] = useState(initialFormValues)
    const [campaignData, setCampaignData] = useState('')

    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setMetrics({
            ...metrics,
            [name]: value
        })
    }

    const setData = (res) =>{
            setCampaignData({
                user_id: (localStorage.getItem('userId')),
                name: metrics.name,
                description: metrics.blurb,
                campaign_length: metrics.campaign_length,
                category: metrics.category,
                monetary_goal: metrics.usd_goal,
                success_prediction: Math.round(res)
        })
        postCampaign()
    }
   const postCampaign = () => {
       console.log(campaignData)
       console.log(campaignData.success_prediction)
        axiosWithAuth()
        .post('https://kickstarter-backend-bw.herokuapp.com/api/campaigns/', campaignData)
        .then(res => {
            console.log(res)
            setCampaignId(res.data.id)
            localStorage.setItem('id', res.data.id)
            console.log('Post was successful')

        })
        .catch(err => {
            console.log('Campaign post did not work')
        })
   }
   

    const handleSubmit = e => {
        e.preventDefault()
        
        axiosWithAuth()
        // DS API
        .post('https://ds-kickstarter-predict.herokuapp.com/predict', metrics )
        .then(res => {
            console.log('Your post was successful')
            console.log(res.data)
            setData(res.data.success_probability)        
        })
        .catch(err => {
            console.log('Your post did not go through')
            console.log(metrics)
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
                name='blurb'
                placeholder='Description'
                value={metrics.blurb}
                onChange={handleChanges}
                />
                <input
                name='campaign_length'
                placeholder='Duration'
                value={metrics.campaign_length}
                onChange={handleChanges}
                />
                <input
                name='usd_goal'
                placeholder='$ Goal'
                value={metrics.usd_goal}
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