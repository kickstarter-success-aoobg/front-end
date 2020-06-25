import React, {useState} from 'react'
import axiosWithAuth from '../../AxiosAuth'

const initialData = {user_id: 0, name: "", description: "", campaign_length: 0, category: "", monetary_goal: 0, success_prediction: 0}

const Edit = (props) => {
    const [campaign, editCampaign] = useState(initialData)
    const {id} = props
    console.log(id)
    console.log(props)

    const handleSubmit = e => {
        e.preventDefault()
        
        axiosWithAuth()
        .put(`https://kickstarter-backend-bw.herokuapp.comapi/campaigns/${id}`)
        .then(res => {
            console.log('.put worked')
        })
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
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
                name='blurb'
                placeholder='Description'
                value={campaign.blurb}
                onChange={handleChanges}
                />
                <input
                name='campaign_length'
                placeholder='Duration'
                value={campaign.campaign_length}
                onChange={handleChanges}
                />
                <input
                name='usd_goal'
                placeholder='$ Goal'
                value={campaign.usd_goal}
                onChange={handleChanges}
                />
                <input
                name='name'
                placeholder='Name of Campaign'
                value={campaign.name}
                onChange={handleChanges}
                />
                <button type='submit'>Submit</button>

            </form> */}
        </div>
    )
}

export default Edit