import React from 'react'
import './CreateJob.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
      '&:hover': {
        border: 'red'
      }
    },
  });

function CreateJob() {
  return (
    <div>
        <Container maxWidth='xxl' sx={{ backgroundColor: '#081354d9', minHeight: '100vh' }}>
            <Link to='/calendar' style={{ textDecoration: 'none', color: '#081354d9', cursor: 'pointer' }}>
              <Button style={{ backgroundColor: 'transparent' }}>
                <Typography variant='h4' 
                sx={{ 
                padding: '1rem',
                textTransform: 'none',
                color: 'white', "@media only screen and (max-width: 768px)": { textAlign: 'center' }, 
                fontFamily: 'Oswald', 
                fontWeight: '700', 
                cursor: 'pointer', 
                ":hover": { color: '#081354d9' } }}>
                    View Calendar
                </Typography>
              </Button>
            </Link> 
            <Box sx={{ width: '50vw', minHeight: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', borderRadius: '10px', backgroundColor: '#d1dcebd9', marginTop: '1rem' }}>
                <Grid
                container
                direction='row'
                display='flex'
                alignItems='center'
                padding='1rem'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button sx={{ padding: '1rem', marginLeft: 'auto' }}>
                            <AiFillCloseCircle  className='react-icon-close-input-field' size={30} />
                        </Button>
                    </Link>
                    <Grid item xs={12}>
                        <Typography variant='h4' 
                        sx={{ 
                        fontFamily: 'Oswald',
                        color: '#081354d9', 
                        textAlign: 'center' }}>
                          Joback
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField label="Company" sx={{ width: '40vw' }}></CssTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField label="Website" sx={{ width: '40vw' }}></CssTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField label="Job Link" sx={{ width: '40vw' }}></CssTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField label="Contact" sx={{ width: '40vw' }}></CssTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField label="Date" sx={{ width: '40vw' }}></CssTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default CreateJob