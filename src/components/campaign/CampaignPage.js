import React, { useEffect } from "react";
import UserCard from "./UserCard";
import Search from "./Search";
import { connect } from 'react-redux';
import { getAllCampaigns } from '../../actions';

function LocalCampaignPage({campaigns, getAllCampaigns}){
    useEffect(() => {
        getAllCampaigns()
    }, []);

    return (
        <section>
            <Search></Search>
        </section>
    )
}

export const CampaignPage = connect((state) => {
    return { ...state.campaigns }
}, { getAllCampaigns })(LocalCampaignPage);