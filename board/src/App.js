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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 960
  },
  progress: {
    margin: theme.spacing(2)
  }

})



class App extends Component {
  // state : 변경이 되는 속성
  // props : 변경이 안되는 속성
  constructor(props) {
    super(props);
    this.state = {
      customer: '',
      completed: 0
    }
  }

  refreshState = () => {
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
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>image</TableCell>
                <TableCell>name</TableCell>
                <TableCell>birthday</TableCell>
                <TableCell>gender</TableCell>
                <TableCell>job</TableCell>
                <TableCell>delete</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {
                this.state.customer ? this.state.customer.map(c => {
                  return (<Customer refreshState={this.refreshState} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} ></Customer>
                  )
                }) :
                  <TableRow>
                    <TableCell colSpan='6' align='center'>
                      <CircularProgress className="classses.progress" variant="determinate" value={this.state.completed}></CircularProgress>
                    </TableCell>
                  </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd refreshState={this.refreshState} />
      </div>
    )
  }
}

export default withStyles(styles)(App);
