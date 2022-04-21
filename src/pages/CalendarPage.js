import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { AiFillCloseCircle } from 'react-icons/ai'
import JobTable from '../components/JobTable/JobTable'

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100vw;
  height: 100%;
  margin: auto;
  background-color: #d1dcebd9;
  padding: 10px;
  border-radius: 3px;

  .react-calendar {
      margin: auto;
      width: 80vw;
      padding: 3rem;
  }

  .react-calendar__navigation {
    display: flex;

  .react-calendar__navigation__label {
    font-weight: bold;
  }

  .react-calendar__navigation__arrow {
    flex-grow: 0.333;
  }

  button {
    margin: 3px;
    background-color: #081354d9;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;

    &:hover {
      background-color: #CBC3E3;
    }

    &:active {
      background-color: #a5c1a5;
    }
  }

  react-calendar__month-view__days__day--weekend {
    color: #fff;
  }

`;

function CalendarPage() {

    const [date, setDate] = useState(new Date());

    const [showForm, setShowForm] = useState(false);

    const [hasOpacity, setHasOpacity] = useState(false);

    const formRef = useRef(null);

    const showMoney = () => {
      setShowForm(!showForm);
    }

    const scrollToRef = (formRef) => window.scrollTo(0, formRef.current.offsetTop)

  return (
      <div id='darkBackgroundTime' className={hasOpacity ? 'darkBackground' : '' }>                                                                                                     
          <CalendarContainer>
            <Link to='/' style={{ textDecoration: 'none', color: '#081354d9', cursor: 'pointer' }}>
              <Button style={{ backgroundColor: 'transparent' }}>
                <Typography variant='h1'
                sx={{ 
                padding: '1rem',
                textTransform: 'none',
                textAlign: 'center', 
                fontFamily: 'Oswald',
                fontSize: { xs: '2rem', sm: '4rem' },
                "@media only screen and (max-width: 768px)": { textAlign: 'center' }, 
                fontWeight: '200', 
                ":hover": { color: '#081354d9' } }}>
                  Joback
                </Typography>
              </Button>
            </Link>       
            <Calendar onChange={setDate} value={date} className='react-calendar' />
            <JobTable />
            <Button variant='contained' sx={{ fontWeight: '700', padding: '1rem', marginTop: '3rem', marginBottom: '4rem' }}
            onClick={() => {
              showMoney();
              scrollToRef();
              // showDark();
            }}>
            Create Job
            </Button>
            {showForm && (
              <Container ref={formRef} maxWidth='xxl' sx={{ backgroundColor: '#d1dcebd9', minHeight: '100vh' }}>
                <Box sx={{ width: '50vw', minHeight: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', borderRadius: '10px', backgroundColor: '#fff', marginTop: '1rem' }}>
                    <Grid
                    container
                    direction='row'
                    display='flex'
                    alignItems='center'
                    padding='1rem'>
                        <Button sx={{ padding: '1rem', marginLeft: 'auto' }} 
                          onClick={() => {
                            showMoney();
                            showDark();
                          }}>
                          <AiFillCloseCircle  className='react-icon-close' size={30} />
                        </Button>
                        <Grid item xs={12}>
                            <Typography variant='h4' sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>Joback</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Company" variant="outlined" sx={{ width: '40vw' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Website" variant="outlined" sx={{ width: '40vw' }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Job Link" variant="outlined" sx={{ width: '40vw' }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Contact" variant="outlined" sx={{ width: '40vw' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Date" variant="outlined" sx={{ width: '40vw' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
              </Container>
            )}

            <Box sx={{ width: '70vw', fontFamily: 'Roboto', fontSize: '1.5rem', backgroundColor: 'white', padding: '4rem', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px', boxShadow: '1px 1px 0.5px black' }}>
              Job Stats
            </Box>
            <Box sx={{ width: '70vw', fontFamily: 'Roboto', fontSize: '1.5rem', backgroundColor: 'white', padding: '4rem', marginTop: '4rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '4rem', borderRadius: '10px', boxShadow: '1px 1px 0.5px black' }}>
              Recently Applied Jobs
            </Box>
          </CalendarContainer>
      </div>
  )
}

export default CalendarPage