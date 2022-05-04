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

const EditableForm = ({ editFormData, handleEditFormChange, handleEditFormSubmit, job, handleCancelClick }) => {
    
    const [errorText, setErrorText] = useState()

    const inputErrors = {
        date: 'Date Required',
        name: 'Name Required',
        jobLink: 'Job Link Required'
    }

    const handleInputError = (event) => {
        const fieldValue = event.target.value

        if (!fieldValue) {
            setErrorText(inputErrors.date)
        } else {
            return false
        }

        console.log(fieldValue)
    }

    const checkValue = (event) => {
      const fieldValue = event.target.value

      console.log(fieldValue)
    }

  return (
    <div>
        <CssTextField
        type='text'
        name='date'
        placeholder='Enter date applied'
        value={editFormData.date}
        onChange={handleInputError}
        error={Boolean(errorText)}
        helperText={errorText}
        sx={{
            marginRight: '0.5rem',
            paddingBottom: '5rem'
        }}
        />
            <Button variant='contained' type='submit' onClick={(event) => {
                handleEditFormSubmit(event, job);
                handleInputError(event)
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
    </div>
  )
}

export default EditableForm

