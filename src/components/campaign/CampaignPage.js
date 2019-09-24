import React from "react";
import UserCard from "./UserCard";
import Search from "./Search";

export function CampaignPage(props){

    const cards = props.campaigns.map((e,i)=>{
        return <UserCard key={i} {...e}></UserCard>
    })

    return (
        <section>
            <Search></Search>
            {cards}

        </section>
    )
}