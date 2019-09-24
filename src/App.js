import React,{useState,useEffect} from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import {LoginLanding} from './components/signup/LoginLanding';
import {LoginFormik} from './components/signup/LoginForm';
import {SupporterFormik} from './components/signup/SupporterForm';
import {OrganizationFormik} from './components/signup/OrganizationForm';

import {CampaignPage} from './components/campaign/CampaignPage';

import styled from "styled-components";



const AppStyle = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  overflow-x:hidden;
`

const VideoStyles = styled.video`
  width:100vw;
  z-index:-1;
  position:absolute;
  top:0;
  left:0;
`

function App() {


  return (
    <AppStyle className="App">

      <VideoStyles muted autoPlay loop src={require("./background.mp4")}></VideoStyles>
      <Navigation />
      
      <Route exact path="campaign" render={(props)=>{return <CampaignPage {...props}></CampaignPage>  }}></Route>

      <Route exact path="/signup" component={LoginLanding}/>
      <Route exact path="/signup/supporter" component={SupporterFormik}/>
      <Route exact path="/signup/organization" component={OrganizationFormik}/>
      <Route exact path="/signup/login" component={LoginFormik}/>

    </AppStyle>
  );
}

export default App;
