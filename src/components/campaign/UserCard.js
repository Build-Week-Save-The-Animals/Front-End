import React from 'react';

function UserCard(props) {
    return (
        <aside>
            <h1>{props.title}</h1>
            <img src={props.photo} alt=""/>
            <p>{props.description}</p>

            <input type="number" name="donation"/>
            <button>Donate</button>
        </aside>
    )
}

export default UserCard;