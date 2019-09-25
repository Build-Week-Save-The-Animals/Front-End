import React, { useEffect } from "react";
import OrganizationCard from "./OrganizationCard";
import {CampaignFormik} from './CampaignForm';
import { connect } from 'react-redux';

export function OrganizationPage(props) {
    const cards = [].map((e,i)=>{
        return <OrganizationCard key={i} {...e}/>
    })
    
    return(
        <>
            <CampaignFormik/>
            {cards}
        </>

    )
}

export default OrganizationPage;