import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";

const NavStyle = styled.nav`
    align-items: center;
    padding: 0 16px;
    border-bottom: 2px solid #efefef;
    margin-bottom: 32px;

    a{
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        margin-right: 8px;
    }

    a:last-of-type {
        margin-right: 0;
    }

    .active{
        color:
    }
`



const Navagation = () => {
    return (
        <NavStyle>
            <div className="nav-links">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/about"> About </NavLink>
            </div>
        </NavStyle>
    )
}

export default Navagation;

