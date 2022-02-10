import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component='h1' variant='h5'>Sign In</Typography>
        <TextField margin='normal' label='Email Address' name='email' required fullWidth autoComplete='email' autoFocus />
        <TextField margin='normal' label='password' type='password' name='password' required fullWidth autoComplete='current-password' />
        <FormControlLabel label='remember me' control={<Checkbox value='remember' color='primary'></Checkbox>}></FormControlLabel>
        <Button variant='contained' type='submit' fullWidth sx={{ mt: 3, mb: 2 }}>Sign in </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
