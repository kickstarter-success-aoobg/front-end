import React, {useContext, useEffect, useState} from 'react'
import { ProfileContext } from './ProfileContext'
import styled from 'styled-components'
import Puppy from '../Images/Puppy.jpg'
import {Link} from 'react-router-dom'
import axiosWithAuth from '../AxiosAuth'
import AddCampaign from './Forms/AddCampaign'

const Dashboard = () => {
    const [campaigns, setCampaigns] = useState(['test', 'test2'])

   
   const getCampaignData = () => {
       axiosWithAuth()
       .get('https://kickstarter-backend-bw.herokuapp.com/')
       .then(res => {
           setCampaigns(res.data)
       })
   }
//     useEffect(()=>{
//        getCampaignData()
//    },[])

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
                        <p>Campaigns:</p>
                        <p>Funded: </p>
                    </StatsDiv>
                </ProfileCard>
               <AdCampaign>

                    <Link to='/addcampaign'>+</Link>
                </AdCampaign> 
                <CampaignsDiv>
                {campaigns.map(item => {
                        return <h2>{item[1]}</h2>
                    })}
                </CampaignsDiv>
            </OuterDiv>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    border: solid red 1px;

`
const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    /* box-shadow: 2px 1px 10px 2px lightgrey; */
    /* justify-content: flex-start; */
    /* border: solid red 2px; */
`
const ProfileCard = styled.div`
    display: flex;
    
`
const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-start;
    

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