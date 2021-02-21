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
import UsersContainer from './components/User/UsersContainer'
import Friends from "./components/Aside/Friends/Friends";
import React from "react";
import store from "./redax/redux-store";
import MessagesContainer from "./components/Aside/NavBar/NavBarLinks/MessagesConteiner";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Aside />

                <div className="wrapper__content">
                    <Route path="/messages" render = {()=><MessagesContainer/>}></Route>
                    <Route path="/profile" render = {()=><Content />}></Route>
                    <Route path="/users" render = {()=><UsersContainer/>}></Route>
                    <Route path="/music" render = {()=><Music/>}></Route>
                    <Route path="/settings" render = {()=><Settings/>}></Route>
                    <Route path="/friends" render = {()=><Friends />}></Route>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;