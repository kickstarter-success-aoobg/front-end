import React, {useContext} from 'react'
import styled from 'styled-components'
import axiosWithAuth from '../AxiosAuth'
import { CampaignContext } from './CampaignContext'
import {Link} from 'react-router-dom'

const CampaignCards = (props) => {
    const {id, campaign} = props
    console.log(campaign)
    const [campaignId, setCampaignId] = useContext(CampaignContext)
    console.log(campaignId)
  
    const handleDelete = () => {
        axiosWithAuth()
        .delete(`https://kickstarter-backend-bw.herokuapp.com/api/campaigns/${campaign.id}`)
    }
    return (
        <MainDiv>
            <CardDiv>
                <InfoDiv>
                    <div className='name'>
                       <h3>{campaign.name}</h3> 
                    </div>
                    <div className='info'>
                        <p>Duration: {campaign.campaign_length} days</p>
                        <p>Amount: ${campaign.monetary_goal}</p>
                    </div>
                    <div className='description'>
                        <p>{campaign.description}</p>
                    </div>
                </InfoDiv>
                <MetricsDiv>
                    <div>
                        <Link to={`/edit/${campaign.id}`} id={campaign.id}><span className='edit' >Edit </span></Link>
                        <span>/</span>
                        <span className='delete' onClick={handleDelete}> Delete</span>
                    </div>
                    <p className='prediction'>{campaign.success_prediction}%</p>
                </MetricsDiv>
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
    justify-content: space-between;
    align-content: flex-start;
    width: 70%;

    .info{
        display: flex;
        justify-content: space-evenly;
    }
    .name{
        display: flex;
        justify-content: center;
    }
    .description{
        display: flex;
        justify-content: center;
        font-size: .8rem;
    }
`
const CardDiv = styled.div`
    display: flex;
    height: 100px;
    border: solid grey 1px;
    h3{
        margin: 0;
        padding: 0;
    }
    p{
        margin: 0;
        padding: 0;
    }

`

const MetricsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

        div{
            display: flex;
            justify-content: space-evenly;
            width: 100%;

            .edit{
                cursor: pointer;
                color: red;

                &:hover{
                    font-size: 1.10rem;
                }
            }
            .delete{
                cursor: pointer;
                color: red;
                &:hover{
                    font-size: 1.10rem;
                }
            }
        }
      
        p{
            margin: 0;
            padding: 0;
            width: 100%;
            font-size: 2.5rem;
            
        
        }
        .prediction{
            align-content: center;
            margin-top: 10%;
            text-align: center;
        }

`


export default CampaignCards