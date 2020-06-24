import React, {useContext, useEffect, useState} from 'react'
import { ProfileContext } from './ProfileContext'
import styled from 'styled-components'
import Puppy from '../Images/Puppy.jpg'
import {Link} from 'react-router-dom'
import axiosWithAuth from '../AxiosAuth'
import AddCampaign from './Forms/AddCampaign'
import CampaignCards from './CampaignCards'

const Dashboard = () => {
    
    const [campaigns, setCampaigns] = useState([])
    console.log(campaigns)
  
    
   
   const getCampaignData = (id) => {
       axiosWithAuth()
       .get(`https://kickstarter-backend-bw.herokuapp.com/api/campaigns/users/${id}`)
       .then(res => {
           setCampaigns(res.data)
           console.log(res.data)
       })
   }
    useEffect(()=>{
        const id = localStorage.getItem('userId')
        console.log(id)
        getCampaignData(id)
   },[])

    const test = () => {
        console.log('works')
    }
    const [profile] = useContext(ProfileContext)
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
                        <p>Funded: </p>
                    </StatsDiv>
                </ProfileCard>
               <AdCampaign>

                    <Link to='/addcampaign'>+</Link>
                </AdCampaign> 
                <CampaignsDiv>
                    <CampaignCards campaigns={campaigns}/>
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
    border: solid grey 2px;
    justify-content: center;
    margin-top: 15%;
    &:hover{
       box-shadow: 0 0 8px 3px lightgrey; 
       cursor: pointer;
    }
    Link{
        text-align: center;
        font-size: 1.75rem;
    }

`
const CampaignsDiv = styled.div`
    border: solid grey 2px;
    justify-content: center;
    margin-top: 15%;    

`
export default Dashboard