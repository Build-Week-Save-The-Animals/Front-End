import React from 'react';

function UserCard(props) {
    return (
        <aside>
            <h1>{props.title}</h1>
            <img src={props.photo} alt=""/>
            <p>{props.description}</p>
        </aside>
    )
}

export default UserCard;