import { Container, Grid } from '@mui/material';
import '../App.css';
import Tourcard from '../component/Tourcard';
import cities from '../data.json';
import { Typography } from '@mui/material';

// {
//   "id": 1,
//     "name": "Niagara Falls",
//       "tours": [
//       ]
//}

const City = ({ city }) => {
    return (
        <div>
            <Typography variant='h4' component='h2' marginTop={5} marginBottom={3} >{city.name}</Typography>
            <Grid container spacing={5}>
                {city.tours.map((tour, index) => {
                    return (<Tourcard tour={tour} key={index} />)
                })}
            </Grid>
        </div>
    )
}

const Home = () => {
    return (
        <div className="App">
            <Container sx={{ marginY: 5 }}>
                {cities.map((city, id) => {
                    return (<City city={city} key={id} />)
                })}
            </Container>
        </div>
    )
}

export default Home;