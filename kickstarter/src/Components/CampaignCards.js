import React from 'react'
import styled from 'styled-components'

const CampaignCards = (props) => {
    const {campaigns} = props
    console.log(campaigns)
    return (
        <div>
            {campaigns.map(item => {
                return <CardDiv>
                <InfoDiv>
                    <h4>{item.name}</h4>
                    <div>
                        <p>Duration: {item.campaign_length} weeks</p>
                        <p>Amount: ${item.monetary_goal}</p>
                    </div>
                    <p>{item.description}</p>
                </InfoDiv>
                <p>{item.success_prediction}</p>
                </CardDiv>

            })}

        </div>
    )
}

const MainDiv = styled.div`


`
const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: solid red 2px;
    width: 80%;

    h4{
        text-align: center;
        /* margin: 3% 0; */
        border: solid blue 2px
    }
    div{
        display: flex;
        justify-content: flex-start;
        border: solid blue 2px;
        /* margin: 3% 0; */
        
        p{
            padding-right: 2%;
            margin: 3% 0;
            border: solid blue 2px
        }
    }
    p{
        /* margin: 3% 0; */
        border: solid blue 2px
    }

`
const CardDiv = styled.div`
    display: flex; 


`


export default CampaignCards