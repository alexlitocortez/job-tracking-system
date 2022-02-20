import React from 'react'
import './HomepageContainer.css'

// Material UI header/paragraph components
import Typography from '@mui/material/Typography';

// Material UI Box
import Box from '@mui/material/Box';

// Material UI Grid
import Grid from '@mui/material/Grid';

// Material UI Button
import Button from '@mui/material/Button';

// Material UI cardmedia for image
import CardMedia from '@mui/material/CardMedia';


function HomepageContainer() {
  return (
    <div className='homepage-container'>
        <Box
          sx={{
            marginBottom: '4rem',
            paddingTop: '5rem'
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
              padding='1rem'
              >
                <Grid item xs={12} md={6}>
                  <img src='src/images/hand-coding-rafiki.png' className='first-image'/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant='h4'
                  sx={{
                    color: '#081354d9',
                    fontWeight: '700',
                    fontSize: { xs: '1rem', sm: '1.5rem' }
                  }}>
                  Shoot your shot
                  </Typography>
                  <br />
                  <Typography variant='h1'
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: { xs: '1.3rem', sm: '2.5rem'},
                    color: '#081354d9',
                    
                  }}>
                    Click the button below to try Joback.
                    You won't regret it.
                  </Typography>
                  <br />
                  <Button variant="contained" 
                  sx={{
                    fontWeight: '700',
                    padding: '1rem'
                  }}>
                    Let's Start
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Blob image */}
        <div className='blob-two'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ADD8E6" d="M54.1,6.1C54.1,29.8,27.1,59.6,3.1,59.6C-20.9,59.6,-41.8,29.8,-41.8,6.1C-41.8,-17.6,-20.9,-35.2,3.1,-35.2C27.1,-35.2,54.1,-17.6,54.1,6.1Z" transform="translate(100 100)" />
          </svg>
        </div>
    </div>
  )
}

export default HomepageContainer