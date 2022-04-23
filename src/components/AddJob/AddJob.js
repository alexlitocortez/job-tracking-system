import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
      '&:hover': {
        border: 'red'
      }
    },
  });

const AddUser = (props) => {
    const initialFormState = { id: null, date: '', company: '', link: '' }
    const [user, setJob] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { company, value } = event.target

        setJob({ ...user, [company]: value })
    }

  return (
    <div>
        <Container maxWidth='md' 
        sx={{ backgroundColor: '#fff', minHeight: '20vh', padding: '1rem', borderRadius: '4px' }}>
            <Typography variant='h5' gutterBottom component="div">
                Add Job
            </Typography>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: 'auto'
            }}
            >
                <TextField id="outlined-basic" label="Date" variant="outlined" size="small" 
                sx={{ marginBottom: '1rem' }} 
                />
                <TextField id="outlined-basic" label="Company" variant="outlined" size="small" 
                sx={{ marginBottom: '1rem' }}
                 />
                <TextField id="outlined-basic" label="Link" variant="outlined" size="small" 
                sx={{ marginBottom: '1rem' }} 
                />
            </Box>
            <Button variant="contained">Submit</Button>
        </Container>
    </div>
  )
}


export default AddUser

