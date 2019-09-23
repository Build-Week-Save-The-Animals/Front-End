import React from "react";
import {withFormik, Field, Form} from "formik";
import styled from "styled-components";

const SupporterFormStyle = styled.div`


`

function SupporterForm(props){
    return(
        <SupporterFormStyle>
            <Form>
                <Field type="text" name="name"></Field>
                <Field type="email" name="email"></Field>
                <Field component="textarea" name="about"></Field>
                <Field type="password" name="password"></Field>

                <Field type="submit" value="Submit"></Field>
            </Form>
        </SupporterFormStyle>
    )
}

export const SupporterFormik = withFormik({
    mapPropsToValues(val){
        return {
            name:val.name || "",
            email:val.email || "",
            about:val.about || "",
            password:val.password || ""
        }
    },

    handleSubmit(values){
        //pass into backend function 
    }

})(SupporterForm);