import React from 'react'
import Button from '@mui/material/Button'
import './JobTable.css'

const JobTable = () => {
  return (
    <table>
        <h2>View Users</h2>
        <thread>
            <tr>
                <th>Date</th>
                <th>Company</th>
                <th>Link</th>
            </tr>
        </thread>
        <tbody>
            <tr>
                <td>Datedata</td>
                <td>Companydata</td>
                <td>Linkdata</td>
                <td>
                    <Button variant='contained'
                    sx={{
                    fontWeight: '700',
                    padding: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '3rem',
                    width: '50%'
                    }}>
                    Edit
                    </Button>
                    
                    <Button variant='contained'
                    sx={{
                    fontWeight: '700',
                    padding: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '3rem',
                    width: '50%'
                    }}>
                    Delete
                    </Button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}


export default JobTable

