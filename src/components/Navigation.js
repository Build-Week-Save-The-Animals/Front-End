import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import {colors} from "../colors";
import { connect } from 'react-redux';


const NavStyle = styled.nav`
    position:fixed;
    top:0;
    left:translate(-50%, -50%);
    margin: 32px auto;


    a{
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size:1.5rem;
        padding-right: 35px;
        border-bottom: 2px solid #efefef;
    }

    a:last-of-type {
        margin-right: 0;
    }

    a:hover{
        color:${colors.mint};
        border-bottom: 2px solid ${colors.mint};
    }
`



const Navigation = ({ user }) => {
    return (
        <NavStyle>
            <div className="nav-links">
                <a href="https://romantic-johnson-6f5765.netlify.com"> Home </a>
                <a href="https://romantic-johnson-6f5765.netlify.com/aboutus"> About Us </a>
                <NavLink exact to="/"> Sign Up </NavLink>
                <NavLink exact to="/campaigns"> Campaigns </NavLink>
            </div>
        </NavStyle>
    )
}

export default connect(state => {
    return { user: state.login.user }
})(Navigation);

