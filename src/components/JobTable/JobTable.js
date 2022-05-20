import React, { useState, useEffect, useContext } from 'react'
import './table.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import data from './jobData.json'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import { FormControl, Typography } from '@mui/material'
import { width } from '@mui/system'
import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow'
import AddTable from '../AddTable/AddTable'
import EditableForm from '../EditableForm/EditableForm'
import JobStats from '../JobStats/JobStats'
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
});

function JobTable() {

//   const [jobs, setJobs] = useState(data)
//   const [error, setError] = useState()  
//   const [errorText, setErrorText] = useState()
//   const [companyErrorText, setCompanyErrorText] = useState()
//   const [jobLinkErrorText, setJobLinkErrorText] = useState()
//   const [dateError, setDateError] = useState()
//   const [editJobId, setEditJobId] = useState(null)
//   const [jobsAppliedToday, setJobsAppliedToday] = useState(0)

//   const today = new Date();
//   const dd = String(today.getDate()).padStart(2, '0');
//   const mm = String(today.getMonth() + 1).padStart(2, '0');
//   const yyyy = today.getFullYear();
//   const newToday = yyyy +'-'+ mm +'-'+ dd;

//   const [addFormData, setAddFormData] = useState({
//     date: '',
//     company: '',
//     jobLink: ''
// })

//   const [editFormData, setEditFormData] = useState({
//     date: '',
//     company: '',
//     jobLink: ''
//   })

//   // Working functions

//   const handleAddFormChange = (event) => {
//     event.preventDefault()

//     const fieldName = event.target.getAttribute('name')
//     const fieldValue = event.target.value 

//     const newFormData = {...addFormData}

//     newFormData[fieldName] = fieldValue

//     setAddFormData(newFormData)
//   }

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault()

//     const newJob = {
//         date: addFormData.date,
//         company: addFormData.company,
//         jobLink: addFormData.jobLink
//     }

//     const newJobs = [...jobs, newJob]
//     setJobs(newJobs)

//     // if (addFormData.date == newToday) {
//     //   setJobsAppliedToday(jobsAppliedToday + 1)
//     // } else {
//     //   return null
//     // }
// }

//   const handleEditFormChange = (event) => {

//     const fieldName = event.target.getAttribute('name')
//     const fieldValue = event.target.value

//     const newFormData = { ...editFormData }

//     newFormData[fieldName] = fieldValue

//     setEditFormData(newFormData)

//     console.log(newFormData)
//   }

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault()

//     const fieldValue = event.target.value

//     const editedJob = {
//       id: editJobId,
//       date: editFormData.date,
//       company: editFormData.company,
//       jobLink: editFormData.jobLink
//     }

//     const newJobs = [...jobs]

//     const index = jobs.findIndex((job) => job.id === editJobId)

//     newJobs[index] = editedJob

//     // setJobs(newJobs)
//     // setEditJobId(null)

//     if (editFormData.date == '') {
//       return null
//     } else if (editFormData.company == '') {
//       return null
//     } else if (editFormData.jobLink == '') {
//       return null
//     } else {
//       setJobs(newJobs)
//       setEditJobId(null)
//     }
//   }

//   const handleEditClick = (event, job) => {
//     event.preventDefault()
//     setEditJobId(job.id)

//     const formValues = {
//       date: job.date,
//       company: job.company,
//       jobLink: job.jobLink
//     }

//     setEditFormData(formValues)
//   }

//   const handleCancelClick = () => {
//     setEditJobId(null)
//   }

//   const handleDeleteClick = (jobId) => {
//     const newJobs = [...jobs]

//     const index = jobs.findIndex((job) => job.id === jobId)

//     newJobs.splice(index, 1)

//     setJobs(newJobs)

//     if (editFormData.date !== newToday) {
//       setJobsAppliedToday(jobsAppliedToday - 1)
//     } else {
//       return null
//     }
//   }

//     const inputErrors = {
//       date: 'Date Required',
//       name: 'Name Required',
//       jobLink: 'job link required'
//     }

  // Input message errors

  // const handleInputError = (event) => {
  //   event.preventDefault()

  //   if (editFormData.date == '') {
  //     setErrorText(inputErrors.date)
  //   } else {
  //     setErrorText(null)
  //   }
  // }

  // const handleCompanyInputError = (event) => {
  //   event.preventDefault()

  //   if (editFormData.company == '') {
  //     setCompanyErrorText(inputErrors.name)
  //   } else {
  //     setCompanyErrorText(null)
  //   }
  // }

  // const handlejobLinkInputError = (event) => {
  //   event.preventDefault()

  //   if (editFormData.jobLink == '') {
  //     setJobLinkErrorText(inputErrors.jobLink)
  //   } else {
  //     setJobLinkErrorText(null)
  //   }
  // }

  const { 
    jobs, setJobs, editFormData, setEditFormData, handleEditClick, handleEditFormChange, 
    handleEditFormSubmit, editJobId, setEditJobId, handleInputError,
    handleCompanyInputError, handlejobLinkInputError, errorText, setErrorText,
    companyErrorText, setCompanyErrorText, jobLinkErrorText, setJobLinkErrorText,
    handleCancelClick, handleAllErrors
  } = useContext(InputFieldContext)

  return (
    <Container maxWidth='xxl'
    sx={{
      backgroundColor: '#d1dcebd9',
      paddingBottom: '5rem',
      "@media only screen and (max-width: 340px)": { 
        padding: '0rem'
        }
    }}>
      <Container maxWidth='xxl'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '5rem',
        "@media only screen and (max-width: 1024px)": { 
          display: 'flex',
          flexDirection: 'column'
        },
        "@media only screen and (max-width: 340px)": { 
          padding: '0rem'
        }
      }}>
      <Box>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Job Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <>
              {
                editJobId === jobs.id ? (
                  <tr>
                    <td>
                      <CssTextField
                      type='date'
                      name='date'
                      placeholder='Enter date applied'
                      value={editFormData.date}
                      onChange={handleEditFormChange}
                      error={Boolean(errorText)}
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
                      value={editFormData.company}
                      onChange={handleEditFormChange}
                      error={Boolean(companyErrorText)}
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
                      value={editFormData.jobLink}
                      onChange={handleEditFormChange}
                      error={jobLinkErrorText}
                      helperText={jobLinkErrorText}
                      sx={{
                        "@media only screen and (max-width: 1253px)": { width: '10vw' },
                      }}
                      />
                    </td>
                    <td>
                      <Button variant='contained' onClick={(event) => handleAllErrors(event)}            
                      type='submit'
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
                ) : (
                  <>
                  {/* {jobs.map(job =>  */}
                    <tr key={job.id}>
                      <td>{job.date}</td>
                      <td>{job.company}</td>
                      <td>{job.jobLink}</td>
                      <td className='read-only-row'>
                        <Button variant='contained' onClick={(event) => handleEditClick(event, job)} type='button'
                        sx={{
                          fontSize: { xs: '0.6rem', sm: '0.9rem' },
                          fontWeight: '700',
                          padding: '0.8rem',
                          margin: 'auto',
                          backgroundColor: '#097969',
                          '&:hover': { backgroundColor: '#097969', opacity: 0.7 },
                          "@media only screen and (min-width: 1253px)": { marginBottom: '0rem' },
                          "@media only screen and (min-width: 1254px)": { marginRight: '0.5rem' },
                          "@media only screen and (min-width: 932px) and (max-width: 1253px)": { marginRight: '0.5rem' },
                          "@media only screen and (max-width: 950px)": { marginRight: '0rem' },
                          "@media only screen and (max-width: 932px)": { marginBottom: '0.5rem' },
                          width: { xs: '10%', sm: '10%' }}}>
                            Edit
                        </Button>
                        <Button variant='contained' onClick={() => handleDeleteClick(jobs.id)} 
                        type='button'
                        sx={{
                          fontSize: { xs: '0.6rem', sm: '0.9rem' },
                          fontWeight: '700',
                          padding: '0.8rem',
                          margin: 'auto',
                          backgroundColor: '#A52A2A',
                          '&:hover': { backgroundColor: '#A52A2A', opacity: 0.7 },
                          width: { xs: '10%', sm: '10%' }}}>
                            Delete
                        </Button>
                      </td>
                    </tr>
                  {/* ) */}
                  )}
                  </>
                )
              }
            </>
          ))}
        </tbody>
      </table>
      </Box>
      <Box>
        <AddTable />
      </Box>
      </Container>
    </Container>
  )
}

export default JobTable