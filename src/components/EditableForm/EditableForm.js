import React, { useState, useContext } from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormControl } from '@mui/material'
import InputFieldContext from '../ContextAPIs/InputFieldContext'

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

const EditableForm = () => {

  const {
    editFormData, setEditFormData, handleEditClick, handleEditFormSubmit, 
    editJobId, setEditJobId, handleInputError, handleCompanyInputError, 
    handlejobLinkInputError, errorText, setErrorText, companyErrorText, 
    setCompanyErrorText, jobLinkErrorText, setJobLinkErrorText, handleAllErrors, 
    handleCancelClick, searchString, setSearchString, handleEditFormChange
  } = useContext(InputFieldContext)

  return (
    <tr>
      <td>
        <CssTextField
        type='date'
        name='date'
        placeholder='Enter date applied'
        value={searchString.date}
        onChange={handleEditFormChange}
        error={errorText}
        helperText={errorText}
        sx={{
          "@media only screen and (max-width: 1253px)": { width: '10vw' },
        }}
        />
      </td>
      <td>
        <CssTextField
        type='text'
        name='company'
        placeholder='Enter company'
        value={searchString.company}
        onChange={handleEditFormChange}
        error={companyErrorText}
        helperText={companyErrorText}
        sx={{
          "@media only screen and (max-width: 1253px)": { width: '10vw' },
        }}
        />
      </td>
      <td>
        <CssTextField
        type='text'
        name='jobLink'
        placeholder='Enter job link'
        value={searchString.jobLink}
        onChange={handleEditFormChange}
        error={jobLinkErrorText}
        helperText={jobLinkErrorText}
        sx={{
          "@media only screen and (max-width: 1253px)": { width: '10vw' },
        }}
        />
      </td>
      <td>
      <Button variant='contained' onClick={handleEditFormSubmit}            
      sx={{
        fontSize: { xs: '0.6rem', sm: '0.9rem' },
        fontWeight: '700',
        padding: '0.8rem',
        margin: 'auto',
        backgroundColor: '#023020',
        '&:hover': { backgroundColor: '#023020', opacity: 0.8 },
        "@media only screen and (min-width: 1024px)": { marginRight: '0.5rem' },
        "@media only screen and (max-width: 1023px)": { marginBottom: '0.5rem' },
        width: { xs: '10%', sm: '10%' }}}>
            Save
      </Button>
      <Button variant='contained' onClick={handleCancelClick} 
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

