import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom";
import {GgLogo} from "../ui/icons";

class Header extends Component {
    render() {
        return (
            <AppBar
                position={'sticky'}
                style={{
                    background: '#ffffff',
                    padding: '10px 0',
                }}
            >
                <Toolbar style={{display: 'flex'}}>
                    <div className={'header_logo'}>
                        <div>
                            <GgLogo
                                link={true}
                                linkTo={'/'}
                                width={'181px'}
                                height={'70px'}
                            />
                        </div>
                    </div>
                    <div style={{marginLeft: '65%'}} >
                    <Link to={''} style={{textDecoration: 'unset'}}>
                        <Button href=''>Apie Mus</Button>
                    </Link>
                    <Link to={''} style={{textDecoration: 'unset'}}>
                        <Button href=''>Galerija</Button>
                    </Link>
                        <Link to={''} style={{textDecoration: 'unset'}}>
                            <Button href=''>Partneriai</Button>
                        </Link>
                    <Link to={''} style={{textDecoration: 'unset'}}>
                        <Button href=''>Kontaktai</Button>
                    </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;