import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import {colors} from "../colors";


const NavStyle = styled.nav`
    align-items: center;
    padding: 0 16px;
    
    margin-bottom: 32px;

    a{
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        padding-right: 25px;
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



const Navagation = () => {
    return (
        <NavStyle>
            <div className="nav-links">
                <NavLink exact to="/"> Home </NavLink>
                <NavLink exact to="/about"> About </NavLink>
            </div>
        </NavStyle>
    )
}

export default Navagation;

