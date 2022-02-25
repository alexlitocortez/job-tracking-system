import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: #d1dcebd9;
  padding: 10px;
  border-radius: 3px;

  .react-calendar {
      margin: auto;
      width: 80vw;
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
      background-color: #556b55;
    }

    &:active {
      background-color: #a5c1a5;
    }
  }
`;

function MainCalendar() {
    const [date, setDate] = useState(new Date());

  return (
      <div>
          <CalendarContainer>
            <Calendar onChange={setDate} value={date} className='react-calendar' />
            <Button variant='contained' sx={{ fontWeight: '700', padding: '1rem', marginTop: '3rem' }}>
            Create Job
            </Button>
          </CalendarContainer>
      </div>
  )
}

export default MainCalendar
