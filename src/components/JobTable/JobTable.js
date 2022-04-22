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
    sx={{ width: 1000, margin: 'auto', marginTop: '1rem', borderRadius: '4px' }}
    >
      <Table sx={{ width: 40 }} aria-label="simple table">
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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1rem'
                    }}
                >
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                </Box>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}


export default JobTable

