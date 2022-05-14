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
import { AiFillCloseCircle } from 'react-icons/ai'
import JobTable from '../components/JobTable/JobTable'
import LogoutButton from '../components/LogoutButton.js/LogoutButton'

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100vw;
  min-height: 60vh;
  margin: auto;
  background-color: #d1dcebd9;
  padding: 1rem;
  border-radius: 3px;

  .react-calendar {
    border: none;
    margin: auto;
    width: 60vw;
    padding: 1rem;
    background-color: #d1dcebd9;
    @media only screen and (max-width: 425px) {
      width: 85vw;
    }
  }

  .react-calendar__navigation {
    display: flex;

  .react-calendar__navigation__label {
    font-weight: bold;
  }

  button {
    margin: 3px;
    background-color: #081354d9;
    border: 0;
    border-radius: 3px;
    color: white;

    &:hover {
      opacity: 0.8;
      background-color: grey;
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

    const scrollToRef = (formRef) => window.scrollTo(0, formRef.current.offsetTop)

  return (
      <div id='darkBackgroundTime' className='calendar-container'> 
        <Box component='span' sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#d1dcebd9', padding: '1rem' }}>
        <LogoutButton /> 
        </Box>                                                                                                   
          <CalendarContainer>
              <Button component={Link} to='/' style={{ backgroundColor: 'transparent' }}>
                <Typography variant='h1'
                sx={{ 
                padding: '1rem',
                color: '#081354d9',    
                textTransform: 'none',
                textAlign: 'center', 
                fontFamily: 'Oswald',
                fontSize: { xs: '2rem', sm: '4rem' },
                "@media only screen and (max-width: 768px)": { textAlign: 'center' }, 
                fontWeight: '200', 
                ":hover": { opacity: 0.8 } }}>
                  Joback
                </Typography>
              </Button>
            <Calendar onChange={setDate} value={date} className='react-calendar' />
          </CalendarContainer>
          <JobTable />
      </div>
  )
}

export default CalendarPage