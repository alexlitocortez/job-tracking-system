import React from 'react'
import './SignupPage.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Footer from '../components/Footer/Footer'


function SignupPage() {
  return (
    <div className='signup-page-container'>
        <Typography variant='h1'
          sx={{
            fontFamily: 'Oswald',
            fontSize: { xs: '2rem', sm: '4rem'},
            color: '#fff',
            fontWeight: '500',
            padding: '1rem',
            marginBottom: '3rem'
          }}>
            Sign Up
        </Typography>
        <Box
        sx={{
        width: { xs: '80vw', sm: '40vw' },
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        paddingBottom: '3rem',
        borderRadius: '10px',
        backgroundColor: '#d1dcebd9',
        }}>
            <TextField 
            id="standard-basic" 
            label="Username" 
            variant="standard" 
            sx={{ width: { xs: '60vw', sm: '60%' }, margin: 'auto' }}>
            </TextField>
            <TextField 
            id="standard-basic" 
            label="Password" 
            variant="standard" 
            sx={{ width: { xs: '60vw', sm: '60%' }, margin: 'auto' }}>
            </TextField>
            <TextField 
            id="standard-basic" 
            label="Email Address" 
            variant="standard" 
            sx={{ width: { xs: '60vw', sm: '60%' }, margin: 'auto' }}>
            </TextField>
            <Button variant="contained" 
            sx={{
            fontSize: { xs: '0.7rem', sm: '1rem' },
            fontWeight: '700',
            padding: '1rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3rem',
            width: { xs: '60%', sm: '50%' }
            }}>
            Create Account
            </Button>
        </Box>
        <Footer />
    </div>
  )
}

export default SignupPage