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

      <VideoStyles muted autoPlay loop src="https://storage.googleapis.com/coverr-main/mp4%2FAgua-natural.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=coverr-183014%40appspot.gserviceaccount.com%2F20190923%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20190923T221555Z&X-Goog-Expires=300&X-Goog-SignedHeaders=host&X-Goog-Signature=3d10b20b26879387e537d01d0795b7ad60fc605f2e4a785c2c71a1b2821aaebb4834c1ae4e669d45a8a4fc7e8c75fa0dbfb5eb59443984e24939b09bfa470b8158cea2b1bdc33d6d8f6ec9de29f4083432f2e5876bd04d349bf21334dac3f1e697654ddeb80863943e41d4e077d08f11682436249fa178abd3e5103aeb505c97c45b8b8570098a83baad7f49d78f7f270d2330075516c232418d1e679af94fea2707fdc0df8a477702dec59a7d882ec07551e11462b75e9c1cf1d16a2a6c00c2bd4c44297309cdb6dcd7e8a4d861cb7018fd8887f6477ab93315ae6680c0dd5253045f76a6456404eaae79d5224a88465679dd753645f7f5862e00a760617694"></VideoStyles>
      <Navagation />

      <Route exact path="/signin" component={LoginLanding}/>
      <Route exact path="/signin/supporter" component={SupporterFormik}/>
      <Route exact path="/signin/organization" component={OrganizationFormik}/>
      <Route exact path="/signin/login" component={LoginFormik}/>

    </AppStyle>
  );
}

export default App;
