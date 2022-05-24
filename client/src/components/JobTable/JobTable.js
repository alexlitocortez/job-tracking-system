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

  const { jobs, setJobs, editJobId, setEditJobId, editFormData } = useContext(InputFieldContext)

  return (
    <Container maxWidth='xxl'
    sx={{
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
              { editJobId === job.id ? ( 
              <EditableForm 
              /> 
              ) : ( 
              <ReadOnlyRow 
                job={job} 
              /> 
              )}
            </>
          ))}
        </tbody>
      </table>
      </FormControl>
      </Box>
      <Box>
        <AddTable />
      </Box>
      </Container>
    </Container>
  )
}

export default JobTable