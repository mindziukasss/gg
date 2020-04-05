import React, {Component} from 'react';
import './style/header.scss'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link, NavLink} from "react-router-dom";

import {NetworkHelper} from "../Service/NetworkHelper";
import SubMenu from "./SubMenu";


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

    showMenu = () => (
        this.state.data.map((menu, i) => {
            if (menu.subMenu) {
                return <NavLink key={menu.menuId} to={`#`}  className='textDecorationUnset'>
                    <SubMenu subMenu = {menu.subMenu} menuSlug={`/${menu.type}/${menu.slug}`} title = {menu.title}/>
                </NavLink>
            } else {
                return <NavLink key={menu.menuId} to={`/${menu.type}/${menu.slug}`} className='textDecorationUnset'>
                    <Button>{menu.title}</Button>
                </NavLink>
            }
        })
    );

    render() {

        return (

            <AppBar className='header' style={{boxSizing: 'unset'}}>
                <Toolbar className='displayFlex'>
                    <div className='headerLogo'>
                        <Link to={'/'}><div className='logo'>
                        </div></Link>
                    </div>
                    <div style={{marginLeft: '65%'}} >
                        {this.showMenu()}
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;