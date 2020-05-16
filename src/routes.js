import React from 'react';
import Layout from './Componnets/Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Componnets/Home/Home';
import Page from './Componnets/Page/Page';
import Gallery from './Componnets/Gallery/Gallery';
import GalleryItem from './Componnets/Gallery/GalleryItem';
import NotFound from "./Componnets/UI/NotFound";

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/:gallery'} exact component={Gallery} />
                <Route path={'/gallery/:id'} exact component={GalleryItem} />
                <Route path={'/:type/:id'} exact component={Page} />
                <Route restricted={false} component={NotFound}/>
            </Switch>
        </Layout>
    )
}

export default Routes;