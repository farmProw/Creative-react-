// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Aside/NavBar/NavBarLinks/Messages";
import Music from "./components/Aside/NavBar/NavBarLinks/Music";
import Settings from "./components/Aside/NavBar/NavBarLinks/Settings";
import News from "./components/Aside/NavBar/NavBarLinks/News";
import Friends from "./components/Aside/Friends/Friends";
import React from "react";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Aside state = {props.state}/>

                <div className="wrapper__content">
                    <Route path="/messages" render = {()=><Messages dispatch = {props.dispatch} state = {props.state}
                                                                    />}></Route>
                    <Route path="/profile" render = {()=><Content state = {props.state}
                                                                  dispatch = {props.dispatch}
                                                                  sms = {props.state.postItems.sms}
                                                                  />}></Route>
                    <Route path="/news" render = {()=><News/>}></Route>
                    <Route path="/music" render = {()=><Music/>}></Route>
                    <Route path="/settings" render = {()=><Settings/>}></Route>
                    <Route path="/friends" render = {()=><Friends state = {props.state}/>}></Route>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;