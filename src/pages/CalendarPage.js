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
import JobForm from '../components/JobForm/JobForm'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'blue',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
    '&:hover': {
      border: 'red'
    }
  },
});

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
            <Box sx={{ width: '70vw', fontFamily: 'Oswald', fontSize: '1.5rem', backgroundColor: 'white', padding: '4rem', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px', boxShadow: '1px 1px 0.5px black' }}>
              Job Stats
            </Box>
          </CalendarContainer>
      </div>
  )
}

export default CalendarPage