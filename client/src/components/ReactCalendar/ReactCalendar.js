import React, { useState, useEffect } from 'react'
import './ReactCalendar.css'
import Button from '@mui/material/Button'
import styled from 'styled-components'
const { datesGenerator } = require('dates-generator')
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Typography from '@mui/material/Typography'
import JobTable from '../JobTable/JobTable.js'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Container = styled.div`
  width: 80vw;
  border: 1px solid black;
  margin: 0 auto;
`

const MonthText = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`

const ReactCalendar = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [dates, setDates] = useState([])
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });
  const [openJobs, setOpenJobs] = useState(false)

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year
    };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);
  
    setDates([ ...dates ]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }, [])

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear }
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body)

    setDates([ ...dates ])
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    })
  }

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([ ...dates ]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }

  const onSelectDate = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date))
  }

  const openJobTable = () => {
    setOpenJobs(!false)
  }

  return (
    <div>
      <div style={{ width: '100%' }}>
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
          ":hover": { opacity: 0.8 } 
          }}>
            Joback
        </Typography>
      <Container>
        <div style={{ padding: 10 }}>
          <div onClick={onClickPrevious} style={{ float: 'left', width: '50%' }}>
            <Button>
              <KeyboardArrowLeftIcon className='react-icon-arrow' fontSize='3rem' />
            </Button>
          </div>
          <div onClick={onClickNext} style={{ float: 'left', width: '50%' }}>
            <Button>
              <KeyboardArrowRightIcon className='react-icon-arrow' fontSize='3rem' />
            </Button>
          </div>
        </div>
        <MonthText style={{ color: 'black', padding: '1rem' }}>
          {months[calendar.month]}
        </MonthText>
        <div>
      <div>
        <table style={{ width: '100%', border: 'none' }}>
          <tbody>
            <tr className='day-header'>
              {days.map((day) => (
                <td key={day} style={{ padding: '5px 0', backgroundColor: '#081354d9', color: 'white' }}>
                    <div style={{ textAlign: 'center', padding: '5px 0' }}>
                      {day}
                    </div>
                </td>
              ))}
            </tr>
            {dates.length > 0 && dates.map((week) => (
              <tr key={JSON.stringify(week[0])}>
                {week.map((each) => (
                  <td key={JSON.stringify(each)} style={{ padding: '5px 0' }}>
                      <div style={{ textAlign: 'center', padding: '5px 0' }}>
                        <Button onClick={openJobTable}
                        sx={{ color: 'black' 
                        }}>
                          {each.date}
                        </Button>
                      </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
      </Container>
      {
        openJobs ? (
          <JobTable />
         ) : (
          null
        )
      }
    </div>
    </div>
  )
}

export default ReactCalendar