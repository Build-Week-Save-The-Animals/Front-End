import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navagation from './components/Navagation';
import {LoginLanding} from './components/LoginLanding';
import {LoginFormik} from './components/LoginForm';
import {SupporterFormik} from './components/SupporterForm';
import {OrganizationFormik} from './components/OrganizationForm';
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

      <VideoStyles muted autoPlay loop src="https://gcs-vimeo.akamaized.net/exp=1569275167~acl=%2A%2F907838704.mp4%2A~hmac=d8befcd3eb7c685be35bbbf153f67bf806ccd3384f8e5f15db4fca270a091de2/vimeo-prod-skyfire-std-us/01/30/10/250154065/907838704.mp4"></VideoStyles>
      <Navagation />

      <Route exact path="/signin" component={LoginLanding}/>
      <Route exact path="/signin/supporter" component={SupporterFormik}/>
      <Route exact path="/signin/organization" component={OrganizationFormik}/>
      <Route exact path="/signin/login" component={LoginFormik}/>

    </AppStyle>
  );
}

export default App;
