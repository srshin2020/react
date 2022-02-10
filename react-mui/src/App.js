// import './App.css';
import Button from '@mui/material/Button';
import { ButtonGroup, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { useState } from 'react';
import Login from './Login'
function Header() {
  return (
    <header>
      <h1>Hello React</h1>
    </header>
  )
}
function Nav() {
  return (
    <nav><ol>
      <li>html</li>
      <li>css</li>
    </ol></nav>
  )
}
function Article() {
  const [open, setOpen] = useState(false,)
  return (
    <article>
      ou can start using MUI with minimal Front-end infrastructure, which is great for prototyping.
      Two Universal Module Definition (UMD) files are provided:
      one for development: https://unpkg.com/@mui/material@latest/umd/material-ui.development.js
      one for production: https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js
      You can follow this CDN example to quickly get started.
      <br />
      <ButtonGroup>
        <Button variant="outlined" onClick={() => { setOpen(true) }}>Dialog</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
      <Dialog open={open}>
        <DialogTitle>Dialog Box</DialogTitle>
        <DialogContent>
          <DialogContentText>Created. </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => { setOpen(false) }}>OK</Button>
          <Button variant="outlined" onClick={() => { setOpen(false) }}>Cancel</Button>
        </DialogActions>

      </Dialog>
    </article>
  )
}
function DialogComponent() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  )

}
function App() {
  return (
    <div>
      <DialogComponent></DialogComponent>
      <br />
      <br />
      <Login></Login>
    </div>
  )
}

export default App;
