import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { LocalizationProvider } from '@mui/lab'
import { Stack } from '@mui/material'
import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import TextField from '@mui/material/TextField'

const ReadOnlyRow = ({ job, handleEditClick, handleDeleteClick }) => {

  const [selectedDate, setSelectedDate] = useState({
    date: ''
  })

  return (
    <tr>
        <td>{job.date}</td>
        <td>{job.company}</td>
        <td>{job.jobLink}</td>
        <td className='read-only-row'>
            <Button variant='contained' onClick={(event) => handleEditClick( event, job )} type='button'
            sx={{
              fontSize: { xs: '0.6rem', sm: '0.9rem' },
              fontWeight: '700',
              padding: '0.8rem',
              margin: 'auto',
              backgroundColor: '#097969',
              '&:hover': { backgroundColor: '#097969', opacity: 0.7 },
              "@media only screen and (max-width: 1253px)": { marginBottom: '0.5rem' },
              "@media only screen and (min-width: 1253px)": { marginBottom: '0rem' },
              "@media only screen and (min-width: 1254px)": { marginRight: '0.5rem' },
              "@media only screen and (min-width: 932px) and (max-width: 1253px)": { marginBottom: '0.5rem' },
              width: { xs: '10%', sm: '10%' }}}>
                  Edit
            </Button>
            <Button variant='contained' onClick={() => handleDeleteClick(job.id)} 
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
  )
}

export default ReadOnlyRow