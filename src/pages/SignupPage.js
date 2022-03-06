import React, { useState, useRef } from 'react'
import './SignupPage.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Footer from '../components/Footer/Footer'
import axios from 'axios'

function SignupPage() {

  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')

  const signup = () => {
    axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail
      },
      withCredentials: true,
      url: 'http://localhost:3000/register',
    }).then((res) => {
      console.log(res)
    })
      .catch((err) => console.log(err))
  }

  return (
    <div className='signup-page-container'>
        <Typography variant='h1'
          sx={{
            fontFamily: 'Oswald',
            fontSize: { xs: '2rem', sm: '4rem'},
            color: '#fff',
            fontWeight: '500',
            padding: '1rem',
            marginBottom: '3rem' }}>
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
        backgroundColor: '#d1dcebd9' }}>
            <TextField onChange={e => setRegisterUsername(e.target.value)}
              id="standard-basic" 
              label="Username" 
              variant="standard" 
              sx={{ width: { xs: '60vw', sm: '60%' }, margin: 'auto' }}>
            </TextField>
            <TextField onChange={e => setRegisterPassword(e.target.value)}
              id="standard-basic" 
              label="Password" 
              variant="standard" 
              sx={{ width: { xs: '60vw', sm: '60%' }, margin: 'auto' }}>
            </TextField>
            <TextField onChange={e => setRegisterEmail(e.target.value)}
              id="standard-basic" 
              label="Email Address" 
              variant="standard" 
              sx={{ width: { xs: '60vw', sm: '60%' }, margin: 'auto' }}>
            </TextField>
            <Divider variant="middle" />
            <Typography variant='h7' sx={{ fontFamily: 'Roboto', padding: '1rem', '&:hover': { color: '#2d65bad9' }, cursor: 'pointer' }}>
              Already have an account? Log in
            </Typography>
            <Button variant="contained" onClick={signup}
              sx={{
              fontSize: { xs: '0.7rem', sm: '1rem' },
              fontWeight: '700',
              padding: '1rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '3rem',
              width: { xs: '60%', sm: '50%' }}}>
              Sign Up
            </Button>
        </Box>
        <Footer />
    </div>
  )
}

export default SignupPage