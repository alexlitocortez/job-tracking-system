import React from 'react'
import Button from '@mui/material/Button'
import './JobTable.css'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import JobForm from '../JobForm/JobForm'

function createData(
    Date: number,
    Company: string,
    Link: string,
  ) {
    return { Date, Company, Link };
  }

const JobTable = () => {

  return (
    <TableContainer component={Paper}
    sx={{ width: 800, marginTop: '1rem', borderRadius: '4px' }}
    >
      <Table sx={{ width: 40 }}>
      <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>Date</TableCell>
            <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>Comapny</TableCell>
            <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>Link</TableCell>
            <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell sx={{ textAlign: 'center', fontSize: '1.1rem' }}>03/14/22</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: '1.1rem' }}>Stripe</TableCell>
                <TableCell 
                sx={{ textAlign: 'center', fontSize: '1.1rem' 
                }}>
                    https://www.indeed.com/?from=gnav-viewjob&vjk=2cbd8376f3ee63f7
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <JobForm />
    </TableContainer>
  )
}


export default JobTable

