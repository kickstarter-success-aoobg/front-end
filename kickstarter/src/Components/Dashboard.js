import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import Puppy from '../Images/Puppy.jpg'
import {Link} from 'react-router-dom'
import axiosWithAuth from '../AxiosAuth'
import AddCampaign from './Forms/AddCampaign'
import CampaignCards from './CampaignCards'
import { CampaignContext } from './CampaignContext'

const Dashboard = () => {
    // const [campaignId, setCampaignId] = useContext(CampaignContext);
    // console.log(campaignId)
    const [campaigns, setCampaigns] = useState([])
    console.log(campaigns)
    // const id = localStorage.getItem('id')
    
   
   const getCampaignData = (id) => {
       axiosWithAuth()
       .get(`https://kickstarter-backend-bw.herokuapp.com/api/campaigns/users/${id}`)
       .then(res => {
           setCampaigns(res.data.campaigns)
           console.log(res.data)
       })
   }
    useEffect(()=>{
        const id = localStorage.getItem('userId')
        console.log(id)
        getCampaignData(id)
   },[])

//    useEffect(() => {
//     setCampaignId(id)
//    },[id])

    const test = () => {
        console.log('works')
    }

    return (
        <MainDiv>
            <OuterDiv>
                <ProfileCard>
                    <ProfileDiv>
                        <div>
                            <img src={Puppy} height='125px' weight='125px'/>
                        </div>
                        <p>KSClopton</p>
                        
                    </ProfileDiv>
                    <StatsDiv>
                        <p>Campaigns: {campaigns.length}</p>
                    </StatsDiv>
                </ProfileCard>
               <AdCampaign>

                    <Link className='link' to='/addcampaign'>+</Link>
                </AdCampaign> 
                <CampaignsDiv>
                    {campaigns.map(item => {
                        return <CampaignCards campaign={item} />
                    })}
                </CampaignsDiv>
            </OuterDiv>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    border: solid red 1px;

`
const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

`
const ProfileCard = styled.div`
    display: flex;
    
`
const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-start;
    img{
        border-radius: 50%;
    }
    p{
       
    }
`

const StatsDiv = styled.div`
    font-size: 1.5rem;

`
const AdCampaign = styled.div`
    display: flex;
    border: solid lightgrey 2px;
    height: 100px;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    margin-top: 15%;
    font-size: 2rem;
    text-decoration: none;
    color: black;

    &:hover{
       box-shadow: 0 0 8px 3px lightgrey; 
       cursor: pointer;
    }
    .link{
        color: lightgrey;
        text-decoration: none;
    }

`
const CampaignsDiv = styled.div`
  

`
export default Dashboard