import React from 'react';

function UserCard(props) {
    return (
        <aside>
            <h1>{props.name}</h1>
            <img src={props.image} alt=""/>
            <p>{props.about}</p>
        </aside>
    )
}

export default UserCard;