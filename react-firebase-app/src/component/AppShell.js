import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link'

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: "auto", //왼쪽으로 정렬되는 효과
    },
};

class AppShell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
    }
    handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle });
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </AppBar>
                    <Drawer open={this.state.toggle}>
                        <MenuItem onClick={this.handleDrawerToggle}><Link to='/'>Home</Link></MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}><Link to='/text'>Text</Link></MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}><Link to='/word'>Word</Link></MenuItem>
                    </Drawer>
                </div>
                <div id='content' style={{ margin: 'auto', marginTop: '20px' }}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AppShell);
