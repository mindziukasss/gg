import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

import './style/header.scss'

class SubMenu extends Component {
    state = {
        anchorEl: null,
        subMenu: this.props.subMenu,
        menuTitle: this.props.title,
        slugMenu: this.props.menuSlug
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    showSubMenu = () => (
        this.state.subMenu.map((data, i) => {
            return <MenuItem key={i}
                             component={Link}
                             to={this.state.slugMenu + '/' + data.subSlug}
                             onClick={this.handleClose}
            >
                {data.subTitle}
            </MenuItem>
        })

    );

    render() {
        const { anchorEl } = this.state;
        return (

            <span>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    onClick={this.handleClick}
                >
                    {this.state.menuTitle}
                </Button>
                <Menu
                    id='lock-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    {this.showSubMenu()}

                </Menu>
            </span>
        );
    }
}

export default SubMenu;