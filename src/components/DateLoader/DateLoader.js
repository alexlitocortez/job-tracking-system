import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/lab'
import { Stack } from '@mui/material'
import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import TextField from '@mui/material/TextField'


function DateLoader({ editFormData }) {

    const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={4} sx={{ width: '10vw' }}>
                <DatePicker 
                    label='Date Picker' 
                    renderInput={(params) => <TextField {...params} />} 
                    value={selectedDate}
                    onChange={() => {
                        setSelectedDate(newValue)
                    }}
                />
            </Stack>
        </LocalizationProvider>
    </div>
  )
}

export default DateLoader