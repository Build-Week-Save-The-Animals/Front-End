import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import { updateCampaign, deleteCampaign } from '../../actions';


function OrganizationCard(props) {

    function handleEdit(){
        props.setForm(props)
    }
    
    function handleDelete(){

    }
    
    return (
        <aside>
            <h1>{props.title}</h1>
            <img src={props.photo} alt=""/>
            <p>{props.description}</p>
            

            <div>
                <button onClick={()=>handleEdit()}>Edit <i class="fas fa-edit"></i></button>
                <button onClick={()=>handleDelete()}>Delete <i class="fas fa-trash"></i></button>
            </div>
        </aside>
    )
}

export default connect(null, { updateCampaign, deleteCampaign })(OrganizationCard);