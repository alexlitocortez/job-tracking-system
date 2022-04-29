import React from 'react'
import Button from '@mui/material/Button'

const ReadOnlyRow = ({ job, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
        <td>{job.date}</td>
        <td>{job.company}</td>
        <td>{job.jobLink}</td>
        <td>
            <Button variant='contained' onClick={(event) => handleEditClick( event, job )} type='button'
            sx={{
              fontSize: { xs: '0.7rem', sm: '1rem' },
              fontWeight: '700',
              padding: '0.5rem',
              margin: 'auto',
              marginTop: '1rem',
              width: { xs: '10%', sm: '10%' }}}>
                  Edit
            </Button>
            <Button variant='contained' onClick={() => handleDeleteClick(job.id)} 
            type='button'
            sx={{
              fontSize: { xs: '0.7rem', sm: '1rem' },
              fontWeight: '700',
              padding: '0.5rem',
              margin: 'auto',
              marginTop: '1rem',
              width: { xs: '10%', sm: '10%' }}}>
                  Delete
            </Button>
        </td>
    </tr>
  )
}

export default ReadOnlyRow