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

const Tourcard = () => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={5} >

                    <img src='https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                        alt=''
                        className='img'
                    />
                    <Box paddingX={1}>
                        <Typography component='h2' variant='subtitle1'>Immerse into the fall</Typography>
                        <Box sx={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography variant='body2' component='p' marginLeft={0.5}>5 hours</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', marginTop: 3
                        }}>
                            <Rating name='read-only' value={4.5} precision={0.5} size='small' />
                            <Typography variant='body2' component='p' marginLeft={0.5}>4.5</Typography>
                            <Typography variant='body2' component='p' marginLeft={1.5}>(655 Reviews)</Typography>
                        </Box>
                        <Box >
                            <Typography variant='h6' component='h3' marginTop={0}>From C $140</Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default Tourcard;