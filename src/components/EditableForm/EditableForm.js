import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Material UI date picker


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

    const [error, setError] = useState()  
    const [errorText, setErrorText] = useState()
    const [companyErrorText, setCompanyErrorText] = useState()
    const [jobLinkErrorText, setJobLinkErrorText] = useState()

    const inputErrors = {
      date: 'Date Required',
      name: 'Name Required',
      jobLink: 'job link required'
    }

    const handleInputError = (event) => {
      event.preventDefault()
      console.log('yerp')

      if (editFormData.date == '') {
        setErrorText(inputErrors.date)
      } else {
        setErrorText(null)
      }
    }

    const handleCompanyInputError = (event) => {
      event.preventDefault()

      if (editFormData.company == '') {
        setCompanyErrorText(inputErrors.name)
      } else {
        setCompanyErrorText(null)
      }
    }

    const handlejobLinkInputError = (event) => {
      event.preventDefault()

      if (editFormData.jobLink == '') {
        setJobLinkErrorText(inputErrors.jobLink)
      } else {
        setJobLinkErrorText(null)
      }
    }

  return (
      <tr>
        <td>
          <CssTextField
          type='text'
          name='date'
          placeholder='Enter date applied'
          value={editFormData.date}
          onChange={handleEditFormChange}
          error={Boolean(errorText)}
          helperText={errorText}
          sx={{
            marginRight: '0.5rem',
          }}
          />
        </td>
        <td>
          <CssTextField
          type='text'
          name='company'
          placeholder='Enter company'
          value={editFormData.company}
          onChange={handleEditFormChange}
          error={Boolean(companyErrorText)}
          helperText={companyErrorText}
          sx={{
            marginRight: '0.5rem'
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
          error={Boolean(jobLinkErrorText)}
          helperText={jobLinkErrorText}
          sx={{
            marginRight: '0.5rem'
          }}
          />
        </td>
        <td>
          <Button variant='contained' type='submit' onClick={(event) => {
              handleEditFormSubmit(event, job)
              handleInputError(event)
              handleCompanyInputError(event)
              handlejobLinkInputError(event)
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

export default EditableForm

