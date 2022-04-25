import React from 'react'
import Button from '@mui/material/Button'
import './JobTable.css'
import Grid from '@mui/material/Grid'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import JobForm from '../JobForm/JobForm'
import { IoEllipsisVerticalCircleOutline } from 'react-icons/io5'

function createData(
    Date: number,
    Company: string,
    Link: string,
  ) {
    return { Date, Company, Link };
  }

const JobTable = () => {

  return (
    <Grid container spacing ={2} style={{ width: '80vw', display: 'flex', margin: 'auto' }}>
      <Grid item xs={4}>
        <JobForm />
      </Grid>
      <Grid item xs={8}>
        <TableContainer component={Paper}
        sx={{ width: '50vw', marginTop: '1rem', borderRadius: '4px' }}
        >
          <Table sx={{ width: '50vw' }}>
              <TableRow>
                <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>Date</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>Comapny</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>Link</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: '1.5rem' }}>
                  Actions
                </TableCell>
              </TableRow>
            <TableBody>
                <TableRow>
                    <TableCell sx={{ textAlign: 'center', fontSize: '1.1rem' }}>03/14/22</TableCell>
                    <TableCell sx={{ textAlign: 'center', fontSize: '1.1rem' }}>Stripe</TableCell>
                    <TableCell 
                    sx={{ textAlign: 'center', fontSize: '1.1rem' 
                    }}>
                        https://www.indeed.com/?from=gnav-viewjob&vjk=2cbd8376f3ee63f7
                    </TableCell>
                    <TableCell>
                      <Box
                      InputProps={{
                        endAdornment: <IoEllipsisVerticalCircleOutline />
                      }}
                      >
                        
                      </Box>
                    </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}


export default JobTable

