import React from 'react'
import './InputField.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function InputField() {
  return (
    <div>
        <Container maxWidth='xxl' sx={{ backgroundColor: '#d1dcebd9', minHeight: '100vh' }}>
            <Box sx={{ padding: '1rem' }}>
                <Typography variant='h4' sx={{ textAlign: 'right', "@media only screen and (max-width: 768px)": { textAlign: 'center' }, fontFamily: 'Oswald', fontWeight: '700', cursor: 'pointer', ":hover": { color: '#081354d9' } }}>View Calendar</Typography>
            </Box>
            <Box sx={{ width: '50vw', minHeight: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', borderRadius: '10px', backgroundColor: '#fff', marginTop: '1rem' }}>
                <Grid
                container
                direction='row'
                display='flex'
                alignItems='center'
                padding='1rem'>
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

export default InputField
