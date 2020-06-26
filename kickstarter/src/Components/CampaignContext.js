import React, {useState, createContext} from 'react'
import axiosWithAuth from '../AxiosAuth'

const initialProfile = []

export const CampaignContext = createContext();

export const CampaignProvider = props => {
    
    const [campaignId, setCampaignId] = useState([]);

  
    
    return (
        <CampaignContext.Provider value={[campaignId, setCampaignId]}>
            {props.children}
        </CampaignContext.Provider>
    )
}