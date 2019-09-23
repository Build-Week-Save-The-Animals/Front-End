import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";


const colors = {
    red:"#f1173a",
    teal:"#17f1ce",
    mint:"#8ff8e7",
    white:"#fff",
    black:"#000"
}

const LoginFormStyle = styled.div`
    section {
        display:flex;
        flex-direction:column;
        align-items:center;
        background:#0005;
        border-radius:20px;

        width: 400px;
        margin: auto 100px;
        padding: 32px;
        font-weight: bold;
        box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.7);
        border-radius: 20px;
        cursor: pointer;
        outline: none;

        h1{
            font-family: 'Noto Serif', serif;
        }
        h2{
            font-size:1.2rem;
            color:#ddd;
            font-family: 'Noto Serif', serif;
        }

        button{
            box-sizing:border-box;
            height:40px;
            padding:7px 30px;
            font-family: 'Roboto', sans-serif;
            margin: 32px 0;
            border:none;
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

export const LoginLanding = (props) => {

    return (
        <LoginFormStyle className="login-form">
            <section>              
                <h1>Save The Animals</h1>

                <h2>I Am A Global Supporter</h2>
                <Link to="/signin/supporter">
                    <button class="primary" type="submit">Global <i class="fas fa-gift"></i></button>
                </Link>
            
                <h2>I Am A Conservation Organization</h2>
                <Link to="/signin/organization">
                    <button class="alt" type="submit">Conservation <i class="fas fa-globe"></i></button>
                </Link>
            
                <h2>Already Have An Account?</h2>
                <Link to="/signin/login">
                    <button class="alt" type="submit">Login <i class="fas fa-user-circle"></i></button>
                </Link>
             
               </section>
        </LoginFormStyle>
    );
};



