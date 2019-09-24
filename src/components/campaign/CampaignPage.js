import React, { useEffect } from "react";
import UserCard from "./UserCard";
import Search from "./Search";
import { connect } from 'react-redux';
import { getAllCampaigns } from '../../actions';

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

    console.log(campaigns);
    


    return (
        <section>
            <Search></Search>
            {cards}
        </section>
    )
}

export const CampaignPage = connect((state) => {
    return { ...state.campaigns }
}, { getAllCampaigns })(LocalCampaignPage);