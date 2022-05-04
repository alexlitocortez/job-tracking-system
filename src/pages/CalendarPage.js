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

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100vw;
  height: 90vh;
  margin: auto;
  background-color: #d1dcebd9;
  padding: 1rem;
  border-radius: 3px;

  .react-calendar {
      margin: auto;
      width: 90vw;
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
      <div id='darkBackgroundTime' className='calendar-container'>                                                                                                     
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