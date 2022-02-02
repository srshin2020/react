import React from "react";
import withStyles from '@material-ui/core/styles';
import { AppBar } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/core/Menu';

const styles = {
    root : {
        flexGrow : 1, 
    },
    menuButton : {
        marginRight : auto //왼쪽으로 정렬되는 효과
    }
}

class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle })
}