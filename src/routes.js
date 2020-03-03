import React from 'react';
import Layout from "./Componnets/Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Componnets/Home/Home";

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <Route path={"/"} exact component={Home}/>
            </Switch>
        </Layout>
    )
}

export default Routes;