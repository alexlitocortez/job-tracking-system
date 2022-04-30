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
              fontSize: { xs: '0.6rem', sm: '0.9rem' },
              fontWeight: '700',
              padding: '0.8rem',
              margin: 'auto',
              backgroundColor: '#097969',
              marginRight: '0.5rem',
              '&:hover': { backgroundColor: '#097969', opacity: 0.7 },
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