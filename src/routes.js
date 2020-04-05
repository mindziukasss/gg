import React from 'react';
import Layout from "./Componnets/Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Componnets/Home/Home";
import Page from "./Componnets/Page/Page";

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={'/:type/:id'} exact component={Page} />
            </Switch>
        </Layout>
    )
}

export default Routes;