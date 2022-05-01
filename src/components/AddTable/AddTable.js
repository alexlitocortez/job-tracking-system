import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { FormControl, Typography } from '@mui/material'
import Button from '@mui/material/Button'

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
        borderColor: '#081354d9',
      },
      '&:hover': {
        border: 'red'
      }
    },
  });

const AddTable = ({ addFormData, handleAddFormChange, handleAddFormSubmit }) => {
  return (
    <div>
        <Box>
        <FormControl
        sx={{
          marginTop: '1rem',
          padding: '1rem',
          borderRadius: '4px'
        }}>
          <Typography variant='h3' sx={{ fontFamily: 'Roboto', fontWeight: '500', marginBottom: '1rem' }}>
            Add Job
          </Typography>
            <CssTextField
              type='text'
              name='date'
              placeholder='Enter date applied'
              value={addFormData.date}
              onChange={handleAddFormChange}
              sx={{
                marginRight: '0.5rem',
                marginBottom: '1rem',
                backgroundColor: '#fff',
                width: '20rem'
              }}
            />
            <CssTextField
              type='text'
              name='company'
              placeholder='Enter company name'
              value={addFormData.company}
              onChange={handleAddFormChange}
              sx={{
                marginRight: '0.5rem',
                marginBottom: '1rem',
                backgroundColor: '#fff'
              }}
            />
            <CssTextField
              type='text'
              name='jobLink'
              placeholder='Enter job link'
              value={addFormData.jobLink}
              onChange={handleAddFormChange}
              sx={{
                marginRight: '0.5rem',
                backgroundColor: '#fff'
              }}
            />
            <Button variant='contained' onClick={handleAddFormSubmit}
            sx={{
              fontSize: { xs: '0.6rem', sm: '0.9rem' },
              fontWeight: '700',
              padding: '0.8rem',
              margin: 'auto',
              marginTop: '1rem',
              width: { xs: '15%', sm: '15%' }}}>
              Add
            </Button>
        </FormControl>
        </Box>
    </div>
  )
}

export default AddTable