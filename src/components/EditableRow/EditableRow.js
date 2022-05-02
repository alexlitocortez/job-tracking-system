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

  return (
    <tr>
        <td>
            <CssTextField 
              type='text'
              name='date'
              placeholder='Enter date applied'
              value={editFormData.date}
              onChange={handleEditFormChange} 
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
            <Button variant='contained' type='submit' onClick={(event) => {
              handleEditFormSubmit(event, job);
              handleErrorChange(event.target.value);
            }}            
            type='submit'
            sx={{
              fontSize: { xs: '0.6rem', sm: '0.9rem' },
              fontWeight: '700',
              padding: '0.8rem',
              margin: 'auto',
              marginRight: '0.5rem',
              backgroundColor: '#023020',
              '&:hover': { backgroundColor: '#023020', opacity: 0.8 },
              width: { xs: '10%', sm: '10%' }}}>
                  Save
            </Button>
            <Button variant='contained' type='submit' onClick={handleCancelClick} 
            type='submit'
            sx={{
              fontSize: { xs: '0.6rem', sm: '0.9rem' },
              fontWeight: '700',
              padding: '0.8rem',
              margin: 'auto',
              backgroundColor: '#880808',
              '&:hover': { backgroundColor: '#880808', opacity: 0.8 },
              width: { xs: '10%', sm: '10%' }}}>
                  Cancel
            </Button>
        </td>
    </tr>
  )
}

export default EditableRow