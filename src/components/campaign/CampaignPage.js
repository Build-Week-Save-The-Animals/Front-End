import React from "react";
import UserCard from "./UserCard";
import Search from "./Seacrh";

export function CampaignPage(props){

    const cards = props.campaigns.map((e,i)=>{
        return <UserCard key={i} {...e}></UserCard>
    })

    return (
        <section>

        </section>
    )
}