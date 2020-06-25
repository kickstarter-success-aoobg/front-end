import React, {useState} from 'react'
import axiosWithAuth from '../../AxiosAuth'
import {useParams} from 'react-router-dom'


const Edit = () => {
    const params = useParams()
    console.log(params)
    const initialData = {user_id: `${params.id}`, name: "", description: "", campaign_length: 0, category: "", monetary_goal: 0, success_prediction: 1}
    const [campaign, editCampaign] = useState(initialData)
    const [newMetrics, setNewMetrics] = useState(initialData)
    console.log(campaign)
    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        editCampaign({
            ...campaign,
            [name]: value
        })
        setNewMetrics({
            user_id: parseInt(campaign.user_id), 
            name: campaign.name, 
            description: campaign.description, 
            campaign_length: parseInt(campaign.campaign_length), 
            category: campaign.category, 
            monetary_goal: parseInt(campaign.monetary_goal), 
            success_prediction: parseInt(campaign.success_prediction)
        })  
            
            console.log(newMetrics)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log('Working on it')
      
        console.log(newMetrics)
        
        axiosWithAuth()
        .put(`https://kickstarter-backend-bw.herokuapp.com/api/campaigns/${params.id}`, newMetrics)
        .then(res => {
            console.log('.put worked')
        })
        .catch(err => { 
            console.log('.put did not work')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select 
                value={campaign.category}
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
                value={campaign.description}
                onChange={handleChanges}
                />
                <input
                name='campaign_length'
                placeholder='Duration'
                value={campaign.campaign_length}
                onChange={handleChanges}
                />
                <input
                name='monetary_goal'
                placeholder='$ Goal'
                value={campaign.monetary_goal}
                onChange={handleChanges}
                />
                <input
                name='name'
                placeholder='Name of Campaign'
                value={campaign.name}
                onChange={handleChanges}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Edit