import React from "react";
import {withFormik,Field,Form} from "formik";
import styled from "styled-components";

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
                <Field type="text" name="donations" placeholder="Donations"/>
                </label>

                <button type="submit">Submit</button>
                
        </Form>
    )
}

export const CampaignFormik = withFormik({
    mapPropsToValues(val){
        return {
            title:val.title || "",
            area:val.area || "",
            description:val.description || "",
            species:val.species || "",
            urgency:val.urgency || "",
            donations:val.donations || ""
        }
    },
    handleSubmit(values){
        
    }
})(CampaignForm)  