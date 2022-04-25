import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { maxWidth } from '@mui/system'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
      '&:hover': {
        border: 'red'
      }
    },
  });

function JobForm() {

    const [dateValue, setDateValue] = useState()
    const [companyValue, setCompanyValue] = useState()
    const [linkValue, setLinkValue] = useState()

    const onTextChange = (e: any) => setTextValue(e.target.value)
    const handleSubmit = () => console.log(textValue)
    const handleReset = () => setTextValue('')
    
  return (
    <div>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '4px',
            backgroundColor: '#fff',
            paddingBottom: '1rem',
        }}
        >
        <h2 style={{ fontFamily: 'Oswald', marginBottom: '1rem'  }}>Add Company Info</h2>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            padding: '1rem'
        }}
        >
            <CssTextField
                onChange={onTextChange}
                variant='filled'
                value={dateValue}
                label='Date Applied'
                style={{ marginBottom: '1rem' }}
            />
            <CssTextField
                onChange={onTextChange}
                variant='filled'
                value={companyValue}
                label='Company'
                style={{ marginBottom: '1rem' }}
            />
            <CssTextField
                onChange={onTextChange}
                variant='filled'
                value={linkValue}
                label='Link'
                style={{ marginBottom: '1rem' }}
            />
        </Box>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Button style={{ maxWidth: '10vw', marginTop: '1rem', marginRight: '0.5rem' }} variant='contained' onClick={handleSubmit}>Submit</Button>
            <Button style={{ maxWidth: '10vw', marginTop: '1rem' }} variant='contained' onClick={handleReset}>Reset</Button>
        </Box>
        </Box>
    </div>
  )
}

export default JobForm

