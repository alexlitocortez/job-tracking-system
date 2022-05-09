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
        <FormControl
        sx={{
          borderRadius: '4px',
          "@media only screen and (max-width: 340px)": { 
            paddingBottom: '3rem'
          }
        }}>
          <Typography variant='h3' sx={{ 
            fontFamily: 'Roboto', 
            fontWeight: '500', 
            marginBottom: '1rem', 
            "@media only screen and (max-width: 768px)": { 
              fontSize: '3rem',
              marginTop: '1rem'
            },
            "@media only screen and (max-width: 425px)": { 
              fontSize: '1.5rem',
            },
            }}>
            Add Job
          </Typography>
            <CssTextField
              type='date'
              name='date'
              placeholder='Enter date applied'
              value={addFormData.date}
              onChange={handleAddFormChange}
              sx={{
                marginRight: '0.5rem',
                marginBottom: '1rem',
                backgroundColor: '#fff',
                width: '20rem',
                "@media only screen and (max-width: 425px)": {
                  width: '60vw'
                }
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
              Submit
            </Button>
        </FormControl>
    </div>
  )
}

export default AddTable