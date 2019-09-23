import React, {useState, useEffect} from 'react';
import {withFormik, Form} from 'formik';
import axios from 'axios';
import styled from "styled-components";


const colors = {
    red:"#f1173a",
    teal:"#17f1ce",
    mint:"#8ff8e7",
    white:"#fff",
    black:"#000"
}

const LoginFormStyle = styled.div`
    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        background:#0005;
        border-radius:20px;

        h1{
            font-family: 'Noto Serif', serif;
        }
        h2{
            font-size:1.2rem;
            color:#aaa;
            font-family: 'Noto Serif', serif;
        }

        button{
            box-sizing:border-box;
            height:40px;
            padding:7px 30px;
            font-family: 'Roboto', sans-serif;
        }

        .primary{
            background:${colors.mint}
        }

        .primary:hover{
            background:transparent;
            border:2px solid ${colors.mint};
            color:${colors.mint};
        }

        .alt{
            background:transparent;
            border:2px solid ${colors.mint};
            color:${colors.mint};
        }

        .alt:hover{
            background:${colors.mint};
            color:black;
        }


    }

`

const LoginForm = ({ values, status }) => {
    const [login, setLogin] = useState([]);

    useEffect(() => {
        if (status) {
            setLogin([...login, status]);
        }
    },[status]);

    return (
        <LoginFormStyle className="login-form">
            <Form>
                <h1>Save The Animals</h1>

                <h2>I AM A GLOBAL SUPPORTER</h2>
                <button class="primary" type="submit">Global <i class="fas fa-gift"></i></button>
            
                <h2>I AM A CONSERVATION ORGANIZATION</h2>
                <button class="alt" type="submit">Conservation <i class="fas fa-globe"></i></button>
            
                <h2>ALREADY HAVE AN ACCOUNT?</h2>
                <button class="alt" type="submit">Login <i class="fas fa-user-circle"></i></button>
             
            </Form>
        </LoginFormStyle>
    );
};

const FormikLoginForm = withFormik({

    handleSubmit(values, {setStatus}) {
        axios.post("https://reqres.in/api/users/", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.res));
    }

})(LoginForm);

export default FormikLoginForm;