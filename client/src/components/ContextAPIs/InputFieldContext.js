import React, { createContext, useState, useEffect } from 'react'
import data from '../JobTable/jobData.json'
import { nanoid } from "nanoid"

const InputFieldContext = createContext()

export const InputFieldProvider = ({ children }) => {
  const [jobs, setJobs] = useState(data)
  const [error, setError] = useState()  
  const [errorText, setErrorText] = useState()
  const [companyErrorText, setCompanyErrorText] = useState()
  const [jobLinkErrorText, setJobLinkErrorText] = useState()
  const [errorTextAdd, setErrorTextAdd] = useState()
  const [companyErrorTextAdd, setCompanyErrorTextAdd] = useState()
  const [jobLinkErrorTextAdd, setJobLinkErrorTextAdd] = useState()
  const [dateError, setDateError] = useState()
  const [editJobId, setEditJobId] = useState()
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

  const [searchString, setSearchString] = useState({
    date: '',
    company: '',
    jobLink: ''
  })

  const inputErrors = {
    date: 'Date Required',
    name: 'Name Required',
    jobLink: 'job link required'
  }

  // const today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0');
  // const yyyy = today.getFullYear();
  // const newToday = yyyy +'-'+ mm +'-'+ dd;

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
      id: nanoid(),
      date: addFormData.date,
      company: addFormData.company,
      jobLink: addFormData.jobLink
    }
    
      const newJobs = [...jobs, newJob]
      setJobs(newJobs)
    
}

  const handleEditClick = (event, job) => {
    event.preventDefault()
    setEditJobId(job.id)

    const formValues = {
      date: job.date,
      company: job.company,
      jobLink: job.jobLink
    }

    setSearchString(formValues)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = {...searchString}
    newFormData[fieldName] = fieldValue

    setSearchString(newFormData)
  }

  const handleInputError = (event) => {
    event.preventDefault()

    if (searchString.date == '') {
      setErrorText(inputErrors.date)
    } else {
      setErrorText(null)
    }
  }

  const handleCompanyInputError = (event) => {
    event.preventDefault()

    if (searchString.company == '') {
      setCompanyErrorText(inputErrors.name)
    } else {
      setCompanyErrorText(null)
    }
  }

  const handlejobLinkInputError = (event) => {
    event.preventDefault()

    if (searchString.jobLink == '') {
      setJobLinkErrorText(inputErrors.jobLink)
    } else {
      setJobLinkErrorText(null)
    }
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedJob = {
      id: editJobId,
      date: searchString.date,
      company: searchString.company,
      jobLink: searchString.jobLink
    }

    const newJobs = [...jobs]
  
    const index = jobs.findIndex((job) => job.id === editJobId)

    if (searchString.date == '') {
      handleInputError(event)
    } else if (searchString.company == '') {
      handleCompanyInputError(event)
    } else if (searchString.jobLink == '') {
      handlejobLinkInputError(event)
    } else {
      newJobs[index] = editedJob
  
      setJobs(newJobs)
      setEditJobId(null)
    }
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

  const value = { 
    addFormData, setAddFormData, handleAddFormChange, handleAddFormSubmit, 
    handleEditClick, handleDeleteClick, jobs, setJobs,
    editJobId, setEditJobId, editFormData, setEditFormData,
    errorText, setErrorText, companyErrorText, setCompanyErrorText,
    jobLinkErrorText, setJobLinkErrorText, handleCancelClick,
    searchString, setSearchString, handleEditFormChange, handleInputError,
    handleCompanyInputError, handlejobLinkInputError, handleEditFormSubmit
  }

  return (
    <InputFieldContext.Provider value={value} >
      {children}
    </InputFieldContext.Provider>
  )
}

export default InputFieldContext