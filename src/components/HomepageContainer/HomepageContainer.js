import React from 'react'
import './HomepageContainer.css'


// Material UI Container
import Container from '@mui/material/Container';


// Material UI Box
import Box from '@mui/material/Box';

// Material UI Grid
import Grid from '@mui/material/Grid';

// Material UI Button
import Button from '@mui/material/Button';


function HomepageContainer() {
  return (
    <div className='homepage-container'>
        <Box
          sx={{
            marginBottom: '8rem',
            paddingTop: '5rem'
          }}>
          <h1 className='homepage-title'>Joback</h1>
          <br />
          <p className='homepage-text'>
            {"Joback is a job-tracking system designed to track your job applications. Using Google Sheets or Excel isn't going to cut it anymore."}
          </p>
        </Box>
        {/* Box that looks like a card */}
            <Box
            className='box-two'
            sx={{
              width: '60vw',
              minHeight: '100vh',
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
                  {/* Add picture */}
                </Grid>
                <Grid item xs={12} md={6}>
                  <h3 className='box-color box-text'>Shoot your shot</h3>
                  <br />
                  <h1 className='box-color box-text-one'>Click the button below to try Joback.
                  You won't regret it.
                  </h1>
                  <br />
                  <Button className='homepage-button' variant="contained" disableElevation>
                    Let's Start
                  </Button>
                </Grid>
              </Grid>
            </Box>
    </div>
  )
}

export default HomepageContainer