import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Logo from '../Images/Logo.PNG'

const NavBar = () => {

    return (
   
        <NavDiv>
            <LogoDiv>
                <Link to='/'><img src={Logo} height='50px' width='50px'/></Link>
                <h2>Crowdfunding Analytics</h2>
            </LogoDiv>

            <OuterDiv>
                <LeftDiv>
                    <Link className='wedo link' to='/aboutus'>Analyze Campaign</Link>
                    <Link className='link' to='/dashboard'>Dashboard</Link>

                </LeftDiv>
                <RightDiv>
                    <a className='border'  href='/login'>Login</a>
                    <a href='/signup'>Sign up</a>
                </RightDiv>
            </OuterDiv>
        </NavDiv>
   
    )
}
export default NavBar

const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: lightgrey 1px solid;
`
const LogoDiv = styled.div`
    display: flex;
    align-items: center;
`

const OuterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 50%;

`
const LeftDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    display:flex;
    justify-content: flex-end;
    
    .link{
       text-decoration: none; 
       color: black;
       width: 50%;
    }
    .wedo{
        width: 30%;
        padding-left: 5%;
       
    }
    
`
const RightDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-left: solid 1px lightgrey;
    width: 33%;
    
    a{
        text-decoration: none;
        color: black;
    }
    .logins{
        text-decoration: none;
        color: black; 
        font-weight: normal;
        font-size: 1rem;
        width: 100%;
        padding: 6% 0%;
    }
`
