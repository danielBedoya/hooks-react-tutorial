import React from 'react'
import { BrowserRouter as Router,
         Switch,
         Route} from "react-router-dom";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/login" component= {LoginScreen} ></Route>
                    <Route exact path="/" component= {HomeScreen}></Route>
                </Switch>
            </div>
        </Router>
    )
}
