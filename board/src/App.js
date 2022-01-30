import './App.css';
import Customer from "./component/Customer";
import CustomerAdd from "./component/CustomerAdd"
import Table from '@material-ui/core/Table';
import { Paper } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
    minWidth: 1080,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    flexGrow: 1
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  progress: {
    margin: theme.spacing(2)
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

})



class App extends Component {
  // state : 변경이 되는 속성
  // props : 변경이 안되는 속성
  constructor(props) {
    super(props);
    this.state = {
      customer: '',
      completed: 0,
      searchKeyword : ''
    }
  }

  refreshState = () => {
    this.setState({
      customer:'',
      completed : 0,
      searchKeyword : ''
    });
    console.log('refreshState');
    this.timer = setInterval(this.progress, 100);
    this.callApi()
      .then(res => {
        clearInterval(this.timer);
        this.setState({ customer: res });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.refreshState();
  }

  callApi = async () => {
    const response = await fetch('/api/customer');
    const body = await response.json();
    console.log(body);
    return body;
  }

  progress = () => {
    // console.log('timer called');
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  render() {

    const filteredComponent = (data) => {
      data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1 ;
      });
      return data.map(c => {
        return <Customer refreshState={this.refreshState} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} ></Customer>
      });
    }
    const { classes } = this.props;
    const cellList = ['아이디', '프로필', '이름', '생년월일', '성별', '직업', '설정'];
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              고객관리 시스템
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="검색하기"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                name='searchKeyword'
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.menu}>
          <CustomerAdd refreshState={this.refreshState} />
        </div>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {cellList.map((c) => {
                  return (<TableCell className={classes.tableHead}>{c}</TableCell>
                  )
                })}
              </TableRow>

            </TableHead>
            <TableBody>
              {
                this.state.customer ?
                  filteredComponent(this.state.customer)
                  :
                  <TableRow>
                    <TableCell colSpan='6' align='center'>
                      <CircularProgress className="classses.progress" variant="determinate" value={this.state.completed}></CircularProgress>
                    </TableCell>
                  </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(App);
