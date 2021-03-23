import './App.css';
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Aside/NavBar/NavBarLinks/Music";
import Settings from "./components/Aside/NavBar/NavBarLinks/Settings";
import UsersContainer from './components/User/UsersContainer'
import Friends from "./components/Aside/Friends/Friends";
import React from "react";
import MessagesContainer from "./components/Aside/NavBar/NavBarLinks/MessagesConteiner";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "../src/components/Login/Login"


function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <Aside />

                <div className="wrapper__content">
                    <Route path="/messages" render = {()=><MessagesContainer/>}></Route>
                    <Route path="/profile/:userId?" render = {()=><ContentContainer />}></Route>
                    <Route path="/users" render = {()=><UsersContainer/>}></Route>
                    <Route path="/music" render = {()=><Music/>}></Route>
                    <Route path="/settings" render = {()=><Settings/>}></Route>
                    <Route path="/friends" render = {()=><Friends />}></Route>
                   <Route path='/login' render = {()=><LoginPage/>}></Route>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;