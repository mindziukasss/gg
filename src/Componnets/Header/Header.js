import React, {Component} from 'react';
import './style/header.scss'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <AppBar className='header'>
                <Toolbar className='displayFlex'>
                    <div className='headerLogo'>
                        <Link to={'/'}><div className='logo'>
                        </div></Link>
                    </div>
                    <div style={{marginLeft: '65%'}} >
                    <Link to={''} className='textDecorationUnset'>
                        <Button href=''>Apie Mus</Button>
                    </Link>
                    <Link to={''} className='textDecorationUnset'>
                        <Button href=''>Galerija</Button>
                    </Link>
                        <Link to={''} className='textDecorationUnset'>
                            <Button href=''>Partneriai</Button>
                        </Link>
                    <Link to={''} className='textDecorationUnset'>
                        <Button href=''>Kontaktai</Button>
                    </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;