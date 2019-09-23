import React from 'react';
import {withFormik, Form, Field} from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';

const LoginFormStyle = styled.div`


`

function LoginForm(props){
    return(
        <LoginFormStyle>
            <Form>
                <h1>Log In</h1>
                <Field type="text" name="userName" placeholder="User Name"/>
                <Field type="password" name="password" placeholder="Password"/>
            </Form>
        </LoginFormStyle>
    )
}

export const LoginFormik = withFormik({
    mapsPropsToValues({userName, password}) {
        return {
            userName: userName || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        userName: Yup.string().required(''),
        password: Yup.string().required()
    }),
    handleSubmit(values){
        //pass into backend function 
    }

    
})(LoginForm);