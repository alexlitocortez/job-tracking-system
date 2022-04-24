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

    const [textValue, setTextValue] = useState.toString((''))
    const onTextChange = (e: any) => setTextValue(e.target.value)
    const handleSubmit = () => console.log(textValue)
    const handleReset = () => setTextValue('')
    
  return (
    <div>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '70vw',
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
        }}
        >
            <CssTextField
                onChange={onTextChange}
                variant='filled'
                value={textValue}
                label={'Date Applied'}
                aria-invalid='true'
            />
            <CssTextField
                onChange={onTextChange}
                variant='filled'
                value={textValue}
                label={'Company'}
            />
            <CssTextField
                onChange={onTextChange}
                variant='filled'
                value={textValue}
                label={'Link'}
            />
        </Box>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center'
        }}
        >
            <Button style={{ maxWidth: '10vw', marginTop: '1rem', marginRight: '0.5rem' }} variant='contained' onClick={handleSubmit}>Submit</Button>
            <Button style={{ maxWidth: '10vw', marginTop: '1rem' }} variant='contained' onClick={handleReset}>Reset</Button>
        </Box>
        </Box>
    </div>
  )
}

export default JobForm

