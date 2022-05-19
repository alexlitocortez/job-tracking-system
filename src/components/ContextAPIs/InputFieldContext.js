import React, { createContext, useState, useEffect } from 'react'
import data from '/Users/l/job-tracking-system/src/components/JobTable/jobData.json'

const InputFieldContext = createContext()

export const InputFieldProvider = ({ children }) => {

  const [jobs, setJobs] = useState(data)
  const [error, setError] = useState()  
  const [errorText, setErrorText] = useState()
  const [companyErrorText, setCompanyErrorText] = useState()
  const [jobLinkErrorText, setJobLinkErrorText] = useState()
  const [dateError, setDateError] = useState()
  const [editJobId, setEditJobId] = useState(null)
  const [addFormData, setAddFormData] = useState({
    date: '',
    company: '',
    jobLink: ''
  })

  const [editFormData, setEditFormData] = useState({
    date: '',
    company: '',
    jobLink: ''
  })

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const newToday = yyyy +'-'+ mm +'-'+ dd;

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value 

    const newFormData = {...addFormData}

    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
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

    // if (addFormData.date == newToday) {
    //   setJobsAppliedToday(jobsAppliedToday + 1)
    // } else {
    //   return null
    // }
}

  const handleEditFormChange = (event) => {

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }

    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)

    console.log(newFormData)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const fieldValue = event.target.value

    const editedJob = {
      id: editJobId,
      date: editFormData.date,
      company: editFormData.company,
      jobLink: editFormData.jobLink
    }

    const newJobs = [...jobs]

    const index = jobs.findIndex((job) => job.id === editJobId)

    newJobs[index] = editedJob

    // setJobs(newJobs)
    // setEditJobId(null)

    if (editFormData.date == '') {
      return null
    } else if (editFormData.company == '') {
      return null
    } else if (editFormData.jobLink == '') {
      return null
    } else {
      setJobs(newJobs)
      setEditJobId(null)
    }
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

    if (editFormData.date !== newToday) {
      setJobsAppliedToday(jobsAppliedToday - 1)
    } else {
      return null
    }
  }

    const inputErrors = {
      date: 'Date Required',
      name: 'Name Required',
      jobLink: 'job link required'
    }

  // Input message errors

  const handleInputError = (event) => {
    event.preventDefault()

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

  const value = { 
    addFormData, setAddFormData, handleAddFormChange, handleAddFormSubmit, 
    handleEditClick, handleDeleteClick
  }

  return (
    <InputFieldContext.Provider value={value} >
      {children}
    </InputFieldContext.Provider>
  )
}

export default InputFieldContext