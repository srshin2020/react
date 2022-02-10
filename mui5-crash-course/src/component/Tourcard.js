import { Box, Grid, Rating, Typography } from '@mui/material';
import Paper from '@mui/material/Paper'
import { AccessTime } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        body1: {
            fontSize: 11,
        },
        body2: {
            fontSize: 9,
        },
    },
});
//         {
//           "id": 1,
//           "name": "Immerse into the Falls",
//           "duration": 5,
//           "rating": 4.5,
//           "numberOfReviews": 462,
//           "price": 465,
//           "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
//         },

const Tourcard = ({ tour }) => {
    return (
        <Grid item sm={6} md={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={5} className='paper'>

                    <img src={tour.image}
                        alt=''
                        className='img'
                    />
                    <Box paddingX={1}>
                        <Typography component='h2' variant='subtitle1'>{tour.name}</Typography>
                        <Box sx={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography variant='body2' component='p' marginLeft={0.5}>{tour.duration} hours</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', marginTop: 3
                        }}>
                            <Rating name='read-only' value={tour.rating} precision={0.5} size='small' />
                            <Typography variant='body2' component='p' marginLeft={0.5}>{tour.rating}</Typography>
                            <Typography variant='body2' component='p' marginLeft={1.5}>({tour.numberOfReviews} Reviews)</Typography>
                        </Box>
                        <Box >
                            <Typography variant='h6' component='h3' marginTop={0}>From C ${tour.price}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default Tourcard;