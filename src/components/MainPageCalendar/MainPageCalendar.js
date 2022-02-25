import React, { useEffect } from 'react'
import './MainPageCalendar.css'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';



function MainPageCalendar() {

// 1) I need to make an array at the end of useEffect to stop re-rendering

// 2) Second option is to try if else condition

  return (
    <div>
        <Container maxWidth='xxl' sx={{ backgroundColor: '#d1dcebd9', minHeight: '100vh' }}>
            {/* Calendar header */}
            <Box sx={{ padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <HiOutlineArrowSmLeft className='arrows' id='previous-month-selector' />
                <Typography variant='h4' sx={{ textAlign: 'center', "@media only screen and (max-width: 768px)": { textAlign: 'center' }, fontFamily: 'Oswald', fontWeight: '700', cursor: 'pointer' }}>(Month)</Typography>
                <HiOutlineArrowSmRight className='arrows' id='next-month-selector' />
            </Box>


            {/* Calendar grid header*/}
            <List sx={{ fontFamily: 'Roboto', fontSize: '1rem', backgroundColor: '#fff' }}>
              <Grid
              container
              direction='row'
              display='flex'
              justifyContent='space-around'
              alignItems='center'
              padding='1rem'
              id='days-of-week'
              >
                <Grid item xs={1.7}>
                  
                </Grid>
                <Grid item xs={1.7}>
                  
                </Grid>
                <Grid item xs={1.7}>
                  
                </Grid>
                <Grid item xs={1.7}>
                  
                </Grid>
                <Grid item xs={1.7}>
                  
                </Grid> 
                <Grid item xs={1.7}>
                  
                </Grid>
                <Grid item xs={1.7}>
                  
                </Grid>
              </Grid>
              <Divider variant="fullWidth" sx={{ backgroundColor: 'gray' }} />
            </List>

            {/* Calendar grid */}
                <Grid
                container spacing={0}
                direction='row'
                display='flex'
                alignItems='center'
                padding='1rem'
                sx={{ position: 'relative', fontSize: '1rem', backgroundColor: '#fff' }}>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                  <Grid xs={1.7} sx={{ border: '1px solid black' }}>
                    <Box sx={{ textAlign: 'right', padding: '5px', height: '5rem' }}>
                      
                    </Box>
                  </Grid>
                </Grid>

        </Container>
    </div>
  )
}



export default MainPageCalendar