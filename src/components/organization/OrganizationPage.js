import React, { useEffect } from "react";
import OrganizationCard from "./OrganizationCard";
import {CampaignFormik} from './CampaignForm';
import { connect } from 'react-redux';
import styled from 'styled-components';

const OrganizationPageStyle = styled.section`
    width:80vw;
    min-height:500px;
`
export function OrganizationPage(props) {
    const cards = [].map((e,i)=>{
        return <OrganizationCard setForm={props.setForm} key={i} {...e}/>
    })
    
    return(
        <OrganizationPageStyle>
            <CampaignFormik form={props.form}/>
            {cards}
        </OrganizationPageStyle>

    )
}

export default OrganizationPage;