import React, { useEffect } from "react";
import UserCard from "./UserCard";
import Search from "./Search";
import { connect } from 'react-redux';
import { getAllCampaigns } from '../../actions';
import styled from "styled-components";

const CampaignPageStyle = styled.section`
    width: 60vw;
    height:80vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;



`

const SearchWrapper = styled.div`
    input {
        box-sizing:border-box;
        height:50px;
        min-width:85%;
        padding:15px 20px;
        font-family: 'Roboto', sans-serif;
        border:2px solid #fff2;
        border-radius:25px;
        background:#353583;
        margin: 22px 0;
        color:white;
        width:500px;
    }

    input::placeholder{
        color:white;
    }
`

function LocalCampaignPage({campaigns, getAllCampaigns}){
    useEffect(() => {
        getAllCampaigns()
    }, []);

    if(!campaigns){
        return <p>No Campaigns to Show</p>
    }

    const cards = campaigns.map((e,i)=>{
        return <UserCard key={i} {...e}></UserCard>
    })

    return (
        <>
            <SearchWrapper>
                <Search>Search<i class="fas fa-search"></i></Search>
            </SearchWrapper>
            <CampaignPageStyle>
                {cards}
            </CampaignPageStyle>
        </>
    )
}

export const CampaignPage = connect((state) => {
    return { ...state.campaigns }
}, { getAllCampaigns })(LocalCampaignPage);