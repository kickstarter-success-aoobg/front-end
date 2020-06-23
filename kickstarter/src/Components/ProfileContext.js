import React, {useState, createContext} from 'react'
import axiosWithAuth from './'

const initialProfile = {Name: '', campaigns: ''}

export const ProfileContext = createContext();

export const ProfileProvider = props => {
    const [profile] = useState(initialProfile);

    const getProfileData = () => {
        axiosWithAuth()
        
    }
    
    return (
        <ProfileContext.Provider value={[profile]}>
            {props.children}
        </ProfileContext.Provider>
    )
}