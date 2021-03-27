import React, { Component } from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";

import MainView from "./views/MainView.js";
import WhatIsView from "./views/WhatIsView.js";
import PreviousEffortsView from "./views/PreviousEffortsView.js";
import ConcernedView from "./views/ConcernedView";
import FutureView from "./views/FutureView";
import ScrollToTop from "./components/PageHeader/ScrollToTop";


class App extends Component {


    render() {
        return (
            <HashRouter basename={"/"}>
                <ScrollToTop/>
                <Switch>
                    <Route
                        path="/what-is"
                        render={(props) => <WhatIsView name={"What is Planetary Protection?"} {...props}/>}
                    />
                    <Route
                        path="/previous-efforts"
                        render={(props) => <PreviousEffortsView name={"Previous Protection Efforts"} {...props} />}
                    />
                    <Route
                        path="/concerned"
                        render={(props) => <ConcernedView name={"Should We Be Concerned?"} {...props} />}
                    />
                    <Route
                        path="/future"
                        render={(props) => <FutureView name={"The Future of Planetary Protection"} {...props} />}
                    />
                    <Route
                        exact path="/"
                        render={(props) => <MainView name={"Home"} {...props} />}
                    />
                </Switch>
            </HashRouter>


        );
    }
}
export default App;
