import React from 'react'
import './FreeTrial.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FaBuilding } from 'react-icons/fa'
import { BiLinkAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Footer from '../components/Footer/Footer'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import LogoutButton from '../components/LogoutButton.js/LogoutButton'

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

function CreateJob() {
  return (
    <div>
        <Container maxWidth='xxl' sx={{ backgroundColor: '#081354d9', minHeight: '93vh', paddingBottom: '7rem' }}>
            <Box component='span' sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
              <LogoutButton />
            </Box>
            <Button 
            component={Link}
            to='/calendar'
            style={{ 
              backgroundColor: 'transparent',
              }}>
              <Typography variant='h3' 
              sx={{ 
              padding: '2rem',
              textTransform: 'none',
              color: 'white', "@media only screen and (max-width: 768px)": { textAlign: 'center' }, 
              fontFamily: 'Oswald', 
              cursor: 'pointer', 
              ":hover": { color: '#081354d9' } }}>
                  View Calendar
              </Typography>
            </Button>
            <Box 
            sx={{ 
            width: { xs: '80vw', sm: '40vw' }, 
            minHeight: '60vh', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            margin: 'auto', 
            borderRadius: '10px', 
            backgroundColor: '#d1dcebd9', 
            marginTop: '1rem', 
            "@media only screen and (max-width: 425px)":
              { minHeight: '70vh' } 
            }}>
              <Box component='span' sx={{ display: 'flex' }}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Button sx={{ padding: '1rem', cursor: 'pointer', backgroundColor: 'transparent' }}>
                      <AiOutlineArrowLeft  className='react-icon-close-input-field' size={30} />
                  </Button>
                </Link>
              </Box>
                <Grid
                container
                direction='row'
                display='block'
                alignItems='center'
                padding='1rem'>
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
                        <CssTextField label="Date Applied" 
                        sx={{ 
                          width: { xs: '60vw', sm: '60%' }, 
                          marginTop: '1rem',
                          marginBottom: '1rem'
                        }}
                          InputProps={{
                            endAdornment: <BsFillCalendarDateFill />
                          }}
                          >
                        </CssTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField label="Company" 
                        sx={{ 
                          width: { xs: '60vw', sm: '60%' }, 
                          marginTop: '1rem',
                          marginBottom: '1rem',
                          "@media only screen and (max-width: 425px)":
                          { width: '60vw'} }}
                        InputProps={{
                          endAdornment: <FaBuilding />
                          }}
                        >
                        </CssTextField>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField label="Job Link" 
                        sx={{ 
                          width: { xs: '60vw', sm: '60%' },
                          marginTop: '1rem',
                          marginBottom: '1rem',
                          "@media only screen and (max-width: 425px)":
                          { width: '60vw'} }}
                          InputProps={{
                            endAdornment: <BiLinkAlt size={20} />
                            }}
                          >
                        </CssTextField>
                    </Grid>
                    <Button variant="contained" style={{ marginTop: '1rem' }}>Submit</Button>
                </Grid>
            </Box>
          </Container>
          <Footer />
    </div>
  )
}

export default CreateJob