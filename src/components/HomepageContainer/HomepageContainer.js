import React, { useState } from 'react'
import axios from 'axios'
import './HomepageContainer.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Footer from '../Footer/Footer'
import TextField from '@mui/material/TextField'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'

function HomepageContainer() {

  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const login = () => {
    axios({
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
  
  return (
    <div className='homepage-container'>
        <Box
          sx={{
            marginBottom: '4rem',
            paddingTop: '5rem',
          }}>
          <Typography variant='h1'
          sx={{
            fontFamily: 'Oswald',
            fontSize: { xs: '2rem', sm: '4rem'},
            color: '#fff',
            fontWeight: '500',
            padding: '1rem'
          }}>
            Joback
          </Typography>
          <br />
          <Typography variant='p'
          sx={{
            color: '#fff',
            fontFamily: 'Roboto',
            fontSize: { xs: '0.8rem', sm: '1.5rem' }
          }}>
            {"Joback is a job-tracking system designed to track your job applications. Using Google Sheets or Excel isn't going to cut it anymore."}
          </Typography>
        </Box>
            {/* Blob image */}
        <div className='blob'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ADD8E6" d="M54.1,6.1C54.1,29.8,27.1,59.6,3.1,59.6C-20.9,59.6,-41.8,29.8,-41.8,6.1C-41.8,-17.6,-20.9,-35.2,3.1,-35.2C27.1,-35.2,54.1,-17.6,54.1,6.1Z" transform="translate(100 100)" />
          </svg>
        </div>
            {/* Box that looks like a card */}
            <Box
            sx={{
              width: '60vw',
              minHeight: '80vh',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 'auto',
              borderRadius: '10px',
              backgroundColor: '#d1dcebd9',
            }}>
              <Grid
              container
              direction='row'
              display='flex'
              alignItems='center'
              justifyContent= 'center'
              padding='1rem'
              >
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h3'
                    sx={{ padding: '1rem' }}
                  >
                    Login
                  </Typography>
                  <TextField onChange={e => setLoginUsername(e.target.value)}
                    id="standard-basic" 
                    label="Username" 
                    variant="standard" 
                    sx={{ width: '80%', margin: 'auto' }}
                    InputProps={{
                      endAdornment: <BsFillPersonFill />
                    }} 
                    >
                  </TextField>
                  <br />
                  <TextField onChange={e => setLoginPassword(e.target.value)}
                    id="standard-basic" 
                    label="Password" 
                    variant="standard"
                    sx={{ width: '80%', margin: 'auto' }} 
                    InputProps={{
                      endAdornment: <AiFillLock />
                    }}
                    />
                  <Box sx={{ width: '87%', display: 'flex', flexDirection: 'flex-start', margin: 'auto', cursor: 'pointer' }}>
                    <Typography variant='h7' sx={{ fontFamily: 'Roboto', padding: '1rem', '&:hover': { color: '#2d65bad9' } }}>Sign Up</Typography>
                  </Box>
                  <Button variant="contained" onClick={login}
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant='h1'
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: { xs: '1.3rem', sm: '2rem'},
                    color: '#081354d9',
                  }}>
                    Click the button below to try Joback without signing up.
                    You won't regret it.
                  </Typography>
                  <Button variant="contained"
                  sx={{
                    fontWeight: '700',
                    padding: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '3rem',
                    marginBottom: '3rem',
                    width: '50%'
                  }}>
                    Test Run
                  </Button>
                  <br />
                </Grid>
              </Grid>
            </Box>
            {/* Blob image */}
        <div className='blob-two'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ADD8E6" d="M54.1,6.1C54.1,29.8,27.1,59.6,3.1,59.6C-20.9,59.6,-41.8,29.8,-41.8,6.1C-41.8,-17.6,-20.9,-35.2,3.1,-35.2C27.1,-35.2,54.1,-17.6,54.1,6.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <Footer />
    </div>
  )
}

export default HomepageContainer