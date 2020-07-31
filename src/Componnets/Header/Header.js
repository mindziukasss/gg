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
        this.state={
            data: [],
            galleryAction: 'textDecorationUnset',
            activeLink: null,
            pageAction: 'textDecorationUnset'
        }
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

    handleClick = (event, i)=> {
        if (event) {
            this.setState({
                galleryAction: 'textDecorationUnset selected',
                activeLink: i
            })
        } else {
            this.setState({
                galleryAction: 'textDecorationUnset',
                activeLink: i
            })
        }
    };

    activeNavBar(menu)
    {
        if (this.state.activeLink) {
            return menu.menuId === this.state.activeLink ? ' selected' : '';
        } else {
            return '/'+menu.type+'/'+menu.slug === window.location.pathname ? ' selected' : '';
        }
    }

    unsetSelected()
    {
        this.setState({
            galleryAction: 'textDecorationUnset',
            activeLink: null
        })
    }

    showMenu = () => (
        this.state.data.map((menu, i) => {
            if (menu.subMenu) {
                return  <NavLink key={menu.menuId} to={`#`}  className={this.state.galleryAction + (window.location.pathname === '/' + menu.type ? ' selected' : '')}
                                 onClick={() => this.handleClick(true, menu.menuId)}>
                            <SubMenu subMenu = {menu.subMenu} menuSlug={`/${menu.type}`} title = {menu.title}/>
                        </NavLink>
            } else {
                return  <NavLink key={menu.menuId} to={`/${menu.type}/${menu.slug}`}
                                 onClick={() => this.handleClick(false, menu.menuId)}
                                 className={this.state.pageAction + this.activeNavBar(menu)}
                                     >
                                     <Button>{menu.title}</Button>
                        </NavLink>
            }
        })
    );

    render() {
        return (

            <AppBar className='header' style={{boxSizing: 'unset'}}>
                { this.state.data ?
                    <Toolbar className='displayFlex'>
                        <div className='headerLogo'>
                            <Link to={'/'} onClick={() => this.unsetSelected()}>
                                <div className='logo'></div>
                            </Link>
                        </div>
                        <div style={{marginLeft: '65%'}}>
                            {this.showMenu()}
                        </div>
                    </Toolbar>
                    :
                    <div></div>

                }
            </AppBar>
        );
    }
}

export default Header;