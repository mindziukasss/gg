import React from 'react';

import Header from '../../Componnets/Header/Header';
import Footer from '../../Componnets/Footer/Footer';

const Layout = (props) => {
    return (
        <div>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;