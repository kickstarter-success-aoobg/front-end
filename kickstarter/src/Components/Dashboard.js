import React, {useContext} from 'react'
import { ProfileContext } from './ProfileContext'
import styled from 'styled-components'
import Puppy from '../Images/Puppy.jpg'

const Dashboard = () => {
    const [profile] = useContext(ProfileContext)
    return (
        <MainDiv>
            <OuterDiv>
                <ProfileCard>
                    <ProfileDiv>
                        <div>
                            <img src={Puppy} height='125px' weight='125px'/>
                        </div>
                        <div>
                            <p>KSClopton</p>
                        </div>
                    </ProfileDiv>
                    <StatsDiv>
                        <p>Campaigns:</p>
                        <p>Funded: </p>
                    </StatsDiv>
                </ProfileCard>
               <CampaignsDiv>
                    <p>+</p>
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
    border: solid grey 1px;
    /* justify-content: flex-start; */
    /* border: solid red 2px; */
`
const ProfileCard = styled.div`
    display: flex;
    border: solid grey 2px;
`
const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

`

const StatsDiv = styled.div`
    font-size: 1.5rem;

`
const CampaignsDiv = styled.div`
    border: solid grey 2px;
    height: 150px;
    font-size: 1.75rem;
    align-items: center;
    justify-content: center;
    
    p{
        text-align: center;
        border: solid red 2px;
    }

`
export default Dashboard