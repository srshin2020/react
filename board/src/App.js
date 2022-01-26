// import './App.css';
import Customer from "./component/Customer";
import Table from '@material-ui/core/Table';
import { Paper } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Component } from "react";

const styles = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }

})

const customer = [{
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: '윤손하',
  birthday: '980102',
  gender: '남자',
  job: '대학생'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: '아이유',
  birthday: '980102',
  gender: '남자',
  job: '대학생'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: '황길동',
  birthday: '980102',
  gender: '남자',
  job: '대학생'
}]

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
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
            </TableRow>

          </TableHead>
          <TableBody>
            {
              customer.map(c => {
                return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} ></Customer>)
              })
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
