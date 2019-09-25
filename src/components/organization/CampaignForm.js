import React from "react";
import {withFormik,Field,Form} from "formik";
import styled from "styled-components";
import { connect } from 'react-redux';
import { addCampaign } from '../../actions';

function CampaignForm(props){
    return (
        <Form>
              <label >
                    Enter Title:
                <Field type="text" name="title" placeholder="Title"/>
                </label>

                <label >
                    Enter Location:
                <Field type="text" name="area" placeholder="Location"/>
                </label>

                <label >
                    Enter Description:
                <Field type="text" name="description" placeholder="Description"/>
                </label>

                <label >
                    Enter Species:
                <Field type="text" name="species" placeholder="Species"/>
                </label>

                <label >
                    Enter Urgency Level:
                <Field type="text" name="urgency" placeholder="Urgency"/>
                </label>

                <label >
                    Enter Itemized Monetary Donations:
                <Field type="number" name="donations" placeholder="Donations"/>
                </label>

                <label >
                    Enter Funding Goal:
                <Field type="number" name="funding" placeholder="Funding"/>
                </label>

                <button type="submit">Submit</button>
                
        </Form>
    )
}

const LocalCampaignFormik = withFormik({
    mapPropsToValues(val){
        return {
            title:val.title || "",
            area:val.area || "",
            description:val.description || "",
            species:val.species || "",
            urgency:val.urgency || "",
            donations:val.donations || 0,
            funding:val.funding || 0,
        }
    },
    handleSubmit(values, { props }){
        
        let formattedValues = {
            "title": values.title,
            "photo": "https://images.pexels.com/photos/148182/pexels-photo-148182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "location": values.area,
            "description": values.description,
            "species": values.species,
            "urgency": values.urgency,
            "donations": values.donations,
            "funding_goal": values.funding
        }

        props.addCampaign(formattedValues);
    }
})(CampaignForm)

export const CampaignFormik = connect(null, { addCampaign })(LocalCampaignFormik);