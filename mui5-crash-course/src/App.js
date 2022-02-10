import { Container, Grid } from '@mui/material';
import './App.css';
import Tourcard from './component/Tourcard';
import Appbar from './component/Appbar';
import cities from './data.json';
import { Typography } from '@mui/material';

// {
//   "id": 1,
//     "name": "Niagara Falls",
//       "tours": [
//       ]
//}
function App() {
  return (
    <div className="App">
      <Appbar></Appbar>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => {
          return (
            <div>
              <Typography key={city.id} variant='h4' component='h2' marginTop={5} marginBottom={3} >
                {city.name}
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour, index) => {
                  console.log(tour.name);
                  return (
                    <Tourcard tour={tour} key={index} />
                  )
                })}
              </Grid>
            </div>
          )
        })}
      </Container>
    </div>
  );
}

export default App;
