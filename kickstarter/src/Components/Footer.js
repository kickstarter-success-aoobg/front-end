import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Footer = () => {

    return (
        <MainDiv>
            <div className='about'>
                <h3>About</h3>
                <Link className='link'>About us</Link>
                <Link className='link'>Mission</Link>
                <Link className='link'>The Team</Link>
            </div>
            <div className='support'>
                <h3>Support</h3>
                <Link className='link'>Help Center</Link>
                <Link className='link'>Rules of Conduct</Link>
                <Link className='link'>Contact Us</Link>
            </div>
            <div className='analytics'>
                <h3>More Analytics</h3>
                <Link className='link'>Dig Deeper</Link>
                <Link className='link'>Mobile Apps</Link>
                <Link className='link'>Research</Link>
            </div>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    border-top: lightgrey solid 1px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 3%;
    padding: 3% 0 ;

    h3{
        padding: 2% 0;
        margin: 2% 0;
    }
    .link{
        text-decoration: none;
        color: black;

        &:hover{
            text-decoration: underline green;
            
        }
    }

    .about{
        display: flex;
        flex-direction: column;
    }

    .support{
        display: flex;
        flex-direction: column;
    }
    .analytics{
        display: flex;
        flex-direction: column;
    }


`
export default Footer