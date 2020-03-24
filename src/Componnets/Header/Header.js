import React, {Component} from 'react';
import './style/header.scss'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom";
import {NetworkHelper} from "../Service/NetworkHelper";

class Header extends Component {

    constructor() {
        super();
        this.state={data:[]}
    }

    componentDidMount()
    {
        NetworkHelper
            .get('menu')
            .then((response) =>
            {
                this.setState({data: response})
            })
    }

    render() {
        const data = this.state.data;
        return (
            <AppBar className='header'>
                <Toolbar className='displayFlex'>
                    <div className='headerLogo'>
                        <Link to={'/'}><div className='logo'>
                        </div></Link>
                    </div>
                    <div style={{marginLeft: '65%'}} >
                        {data.map((menu, index) => {
                            let url = menu.type+'/'+menu.slug;
                            console.log(url);
                           return  <Link key ={index}
                                         to={url} className='textDecorationUnset'>
                               <Button>{menu.title}</Button>
                           </Link>
                        })}
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;