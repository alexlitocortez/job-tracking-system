import React, { useState } from 'react'
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
import EditableRow from '../EditableRow/EditableRow'
import AddTable from '../AddTable/AddTable'
import EditableForm from '../EditableForm/EditableForm'

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

    const [jobs, setJobs] = useState(data)

    const [addFormData, setAddFormData] = useState({
      date: '',
      company: '',
      jobLink: ''
  })

    const [editJobId, setEditJobId] = useState(null)

    const [editFormData, setEditFormData] = useState({
      date: '',
      company: '',
      jobLink: ''
    })

  const handleAddFormChange = (event) => {
      event.preventDefault()

      const fieldName = event.target.getAttribute('name')
      const fieldValue = event.target.value 

      const newFormData = {...addFormData}
      newFormData[fieldName] = fieldValue

      setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
      event.preventDefault()

      const newJob = {
          date: addFormData.date,
          company: addFormData.company,
          jobLink: addFormData.jobLink
      }

      const newJobs = [...jobs, newJob]
      setJobs(newJobs)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const fieldValue = event.target.value

    const inputError = {
      date: 'Date Required',
      name: 'Name Required',
      jobLink: 'Job Link Required'
    }

    const editedJob = {
      id: editJobId,
      date: editFormData.date,
      company: editFormData.company,
      jobLink: editFormData.jobLink
    }

    const newJobs = [...jobs]

    const index = jobs.findIndex((job) => job.id === editJobId)

    newJobs[index] = editedJob

    setJobs(newJobs)
    setEditJobId(null)
  }
  
  const handleEditClick = (event, job) => {
    event.preventDefault()
    setEditJobId(job.id)

    const formValues = {
      date: job.date,
      company: job.company,
      jobLink: job.jobLink
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditJobId(null)
  }

  const handleDeleteClick = (jobId) => {
    const newJobs = [...jobs]

    const index = jobs.findIndex((job) => job.id === jobId)

    newJobs.splice(index, 1)

    setJobs(newJobs)
  }

  return (
    <div>
      <Container maxWidth='xxl'
      sx={{
        backgroundColor: '#d1dcebd9'
      }}
      >
      <Box>
      <FormControl>
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
                editJobId === job.id ? (
                  <EditableRow 
                    editFormData={editFormData} 
                    handleEditFormChange={handleEditFormChange} 
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                    job={job} 
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )
              }
            </>
          ))}
        </tbody>
      </table>
      </FormControl>
      </Box>
      <Box>
        <AddTable 
          addFormData={addFormData}
          handleAddFormChange={handleAddFormChange}
          handleAddFormSubmit={handleAddFormSubmit}
        />
      </Box>
      <Box>
        <EditableForm 
          editFormData={editFormData} 
          handleEditFormChange={handleEditFormChange} 
          handleEditFormSubmit={handleEditFormSubmit}
          handleCancelClick={handleCancelClick}
        />
      </Box>
      </Container>
      </div>
  )
}

export default JobTable