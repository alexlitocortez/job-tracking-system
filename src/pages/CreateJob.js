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

function CreateJob() {
  return (
    <div>
        <Container maxWidth='xxl' sx={{ backgroundColor: '#081354d9', minHeight: '100vh' }}>
            <Box sx={{ padding: '1rem' }}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Typography variant='h4' sx={{ textAlign: 'right', color: 'white', "@media only screen and (max-width: 768px)": { textAlign: 'center' }, fontFamily: 'Oswald', fontWeight: '700', cursor: 'pointer', ":hover": { color: '#081354d9' } }}>
                        View Calendar
                    </Typography>
                </Link>                
            </Box>
            <Box sx={{ width: '50vw', minHeight: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', borderRadius: '10px', backgroundColor: '#d1dcebd9', marginTop: '1rem' }}>
                <Grid
                container
                direction='row'
                display='flex'
                alignItems='center'
                padding='1rem'>
                    <Button sx={{ padding: '1rem', marginLeft: 'auto' }}>
                        <AiFillCloseCircle  className='react-icon-close-input-field' size={30} />
                      </Button>
                    <Grid item xs={12}>
                        <Typography variant='h4' sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>Joback</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Company" variant="outlined" sx={{ width: '40vw' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Website" variant="outlined" sx={{ width: '40vw' }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Job Link" variant="outlined" sx={{ width: '40vw' }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Contact" variant="outlined" sx={{ width: '40vw' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Date" variant="outlined" sx={{ width: '40vw' }} />
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