import React from 'react';
import {withFormik, Form, Field} from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { doLogin } from '../actions';

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

const LocalLoginFormik = withFormik({
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

export const LoginFormik = connect(null, { doLogin })(LocalLoginFormik);