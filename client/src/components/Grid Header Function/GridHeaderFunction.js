import React from 'react'

const GridHeaderFunction = () => {

    const weekday = require("dayjs/plugin/weekday");
  const weekOfYear = require("dayjs/plugin/weekOfYear");

  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


  // Fetching current year and setting YYYY format
  const INITIAL_YEAR = dayjs().format("YYYY");

  // Setting current month as starting point. 1 equals January
  const INITIAL_MONTH = dayjs().format("M");
  
    const daysOfWeekElement = document.getElementById('days-of-week');

    // Loop through the array of weekdays
    WEEKDAYS.forEach(weekday => {
        // For each item in the array, make a list item element
        const weekDayElement = document.createElement('li');
        // Append a child element inside the list item...
        daysOfWeekElement.appendChild(weekDayElement);
        //  ...that contains the value in the array
        weekDayElement.innerText = weekday;
    })
}

export default GridHeaderFunction

