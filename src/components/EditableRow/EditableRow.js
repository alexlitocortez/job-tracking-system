import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
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
        borderColor: 'blue',
      },
      '&:hover': {
        border: 'red'
      }
    },
  })

const EditableRow = ({ editFormData, handleEditFormChange, handleEditFormSubmit, job, handleCancelClick }) => {

    const error = event.target.getAttribute('name') == ''

  return (
    <tr>
        <td>
            <CssTextField 
              type='text'
              name='date'
              placeholder='Enter date applied'
              value={editFormData.date}
              onChange={handleEditFormChange} 
              error={error}
              helperText={error ? 'Please type something' : 'Yes!'}
              sx={{
                marginRight: '0.5rem',
              }}
            />
        </td>
        <td>
            <CssTextField 
              type='text'
              name='company'
              placeholder='Enter company name'
              value={editFormData.company}
              onChange={handleEditFormChange}
              sx={{
                marginRight: '0.5rem',
              }}
            />
        </td>
        <td>
            <CssTextField 
              type='text'
              name='jobLink'
              placeholder='Enter job link'
              value={editFormData.jobLink}
              onChange={handleEditFormChange}
              sx={{
                marginRight: '0.5rem',
              }}
            />
        </td>
        <td>
            <Button variant='contained' type='submit' onClick={(event) => handleEditFormSubmit( event, job )} type='submit'
            sx={{
              fontSize: { xs: '0.7rem', sm: '1rem' },
              fontWeight: '700',
              padding: '0.5rem',
              margin: 'auto',
              width: { xs: '10%', sm: '10%' }}}>
                  Save
            </Button>
            <Button variant='contained' type='submit' onClick={handleCancelClick} type='submit'
            sx={{
              fontSize: { xs: '0.7rem', sm: '1rem' },
              fontWeight: '700',
              padding: '0.5rem',
              margin: 'auto',
              width: { xs: '10%', sm: '10%' }}}>
                  Cancel
            </Button>
        </td>
    </tr>
  )
}

export default EditableRow