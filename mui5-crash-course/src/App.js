import { Container, Grid } from '@mui/material';
import './App.css';
import Tourcard from './component/Tourcard';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <Tourcard />
          <Tourcard />
          <Tourcard />
          <Tourcard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
