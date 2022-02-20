import React from 'react'
import './InputField.css'

// Material UI box
import Box from '@mui/material/Box';

// Material UI Grid
import Grid from '@mui/material/Grid';

// Material UI Textfield
import TextField from '@mui/material/TextField';

// Material UI Button
import Button from '@mui/material/Button';

function InputField() {
  return (
    <div className='input-field-container'>
        <Box
            component='form'
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' }, 
                width: '50vw',
                minHeight: '80vh',
                margin: 'auto',
                borderRadius: '10px',
                boxShadow: '1px 1px 1px black',
                backgroundColor: 'white'
            }}
            noValidate
            autoComplete='off'
        >
            <Grid
            container
            direction='column'
            display='flex'
            alignItems='center'
            padding='1rem'
            margin='auto'
            spacing={6}
            >
                <Grid item xs={12}>
                    <TextField id='outlined-basic' label='Company Name' variant='outlined' />
                </Grid>
                <Grid item xs={12}>
                    <TextField id='outlined-basic' label='Outlined' variant='outlined' />
                </Grid>
                <Grid item xs={12}>
                    <TextField id='outlined-basic' label='Outlined' variant='outlined' />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" 
                    sx={{
                    fontWeight: '700',
                    padding: '1rem'
                    }}>
                    Send
                    </Button>
                </Grid>
            </Grid>

            

        </Box>
    </div>
  )
}

export default InputField
