import React, { useState } from 'react'
import Axios from 'axios'
import './HomepageContainer.css'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Footer from '../Footer/Footer'
import TextField from '@mui/material/TextField'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import LogoutButton from '../LogoutButton.js/LogoutButton'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'blue',

  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
    '&:hover': {
      border: 'red'
    }
  },
});

function HomepageContainer(history) {

  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [data, setData] = useState(null)

  const login = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: 'http://localhost:3000/login',
    }).then((res) => {
      console.log(res)
    })
      .catch((err) => console.log(err))
  }

  const getUser = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:3000/user',
    }).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <div>
      <Container maxWidth='xxl' 
      sx={{ 
        backgroundColor: '#081354d9', 
        minHeight: '93vh', 
        width: '100%',
        minHeight: '100%',
        overflow: 'auto'
        }}>
        <Box component='span' sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <LogoutButton className='react-icon-logout-button' />
        </Box>
        <Box
          sx={{
            marginBottom: '2.5rem',
            height: '100%',
          }}>
          <Typography variant='h3'
          sx={{
            fontFamily: 'Oswald',
            color: '#fff',
            fontWeight: '500',
            padding: '1rem'
          }}>
            Joback
          </Typography>
          <br />
            <Box
            sx={{
              color: '#fff',
              fontFamily: 'Roboto',
              fontSize: { xs: '1rem', sm: '1.2rem' },
              lineHeight: '1.5rem',
              padding: '0.5rem'
            }}
            >
              {"Joback is a job-tracking system designed to track your job applications. Using Google Sheets or Excel isn't going to cut it anymore."}
            </Box>
        </Box>
        <div className='blob'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ADD8E6" d="M54.1,6.1C54.1,29.8,27.1,59.6,3.1,59.6C-20.9,59.6,-41.8,29.8,-41.8,6.1C-41.8,-17.6,-20.9,-35.2,3.1,-35.2C27.1,-35.2,54.1,-17.6,54.1,6.1Z" transform="translate(100 100)" />
          </svg>
        </div>
            <Box
            sx={{
              width: { xs: '80vw', sm: '50vw', lg: '30vw' },
              minHeight: '65vh',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 'auto',
              marginBottom: '3.5rem',
              borderRadius: '10px',
              backgroundColor: '#d1dcebd9',
            }}>
              <Grid
              container
              direction='row'
              margin='auto'
              padding='1rem'
              >
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h3'
                    sx={{ padding: '1rem', fontSize: { xs: '1.5rem', sm: '3rem' } }}
                  >
                    Login
                  </Typography>
                  <CssTextField onChange={e => setLoginUsername(e.target.value)}
                    label="Username"
                    sx={{ width: '80%', margin: 'auto', marginBottom: '3rem' }}
                    InputProps={{
                      endAdornment: <BsFillPersonFill size={25} />
                    }}
                  >
                  </CssTextField>
                  <CssTextField onChange={e => setLoginPassword(e.target.value)}
                    id="outlined-adornment-password"
                    label="Password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    sx={{ width: '80%', margin: 'auto' }}
                    InputProps={{
                      endAdornment:
                      <VisibilityIcon
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      sx={{ cursor: 'pointer' }}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </VisibilityIcon>
                    }}
                  >
                  </CssTextField>
                  <br />
                  <Box sx={{ width: '87%', display: 'flex', margin: 'auto', cursor: 'pointer', justifyContent: { xs: 'center', sm: 'start' } }}>    
                    <Link to='signup' style={{ textDecoration: 'none' }}>
                      <Typography variant='h7' sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'black', padding: '1rem', '&:hover': { color: '#2d65bad9' } }}>
                        Sign Up
                      </Typography>
                    </Link>
                  </Box>
                  <Button variant="contained" to='/calendar'
                  component={Link}
                  onClick={login}
                    sx={{
                    fontWeight: '700',
                    padding: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '3rem',
                    width: '50%'
                    }}>
                    Login
                  </Button>
                  <Button variant="contained"
                  component={Link}
                  to='freetrial'
                  sx={{
                  fontWeight: '700',
                  padding: '1rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: '3rem',
                  marginBottom: '3rem',
                  width: '50%'
                  }}>
                    <Typography variant='h7' sx={{ fontFamily: 'Roboto', color: 'white' }}>
                      Free Trial
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
        <div className='blob-two'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ADD8E6" d="M54.1,6.1C54.1,29.8,27.1,59.6,3.1,59.6C-20.9,59.6,-41.8,29.8,-41.8,6.1C-41.8,-17.6,-20.9,-35.2,3.1,-35.2C27.1,-35.2,54.1,-17.6,54.1,6.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default HomepageContainer