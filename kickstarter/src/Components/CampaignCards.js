import React, {useContext} from 'react'
import styled from 'styled-components'
import axiosWithAuth from '../AxiosAuth'
import { CampaignContext } from './CampaignContext'

const CampaignCards = (props) => {
    const {id, campaign} = props
    console.log(campaign)
    const [campaignId, setCampaignId] = useContext(CampaignContext)
    console.log(campaignId)
    // const id = localStorage.getItem('userId')
    // const cID = localStorage.getItem('campaignId')

    const handleDelete = () => {
        axiosWithAuth()
        .delete(`https://kickstarter-backend-bw.herokuapp.com/api/campaigns/${campaign.id}`)
    }
    return (
        <MainDiv>
            <CardDiv>
                <InfoDiv>
                    <div className='name'>
                       <p>{campaign.name}</p> 
                    </div>
                    <div className='info'>
                        <p>Duration: {campaign.campaign_length} wks</p>
                        <p>Amount: ${campaign.monetary_goal}</p>
                    </div>
                    <div className='description'>
                        <p>{campaign.description}</p>
                    </div>
                </InfoDiv>
                <p className='prediction'>{campaign.success_prediction}</p>
                <p>{campaign.id}</p>
                <span >Edit /</span><span onClick={handleDelete}>Delete</span>
            </CardDiv>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    margin-top: 15%;    

`
const InfoDiv = styled.div`
    display: flex;
    border-right: solid lightgrey 1px;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    width: 100%;

`
const CardDiv = styled.div`
    display: flex;
    height: 100px;
    border: solid grey 2px;

    p{
        margin: 0;
        padding: 0;
        width: 50%;
        /* text-align: center; */
    }
    .prediction{
        align-content: center;
        margin-top: 10%;
    }
  
`


export default CampaignCards