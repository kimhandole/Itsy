import React from "react";
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import NavCat from "./nav_cat/nav_cat";
import HomePageContainer from './homepage/homepage_container';

const App = () => (
    <div id="app">
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>Itsy</h1>
            </Link>
            <GreetingContainer />
        </header>

            <NavCat />

        <Switch>
            <Route exact path='/' component={HomePageContainer} />

        </Switch>
    </div>
);

export default App;