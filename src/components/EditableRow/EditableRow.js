import React from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

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
  

const EditableRow = () => {
  return (
    <tr>
        <td>
            <CssTextField
              type='text'
              name='Date'
              placeholder='Enter date applied'
              sx={{
                marginRight: '0.5rem',
              }}
            />
        </td>
        <td>
            <CssTextField
              type='text'
              name='Company'
              placeholder='Enter company name'
              sx={{
                marginRight: '0.5rem',
              }}
            />
        </td>
        <td>
            <CssTextField
              type='text'
              name='Date'
              placeholder='Enter job link'
              sx={{
                marginRight: '0.5rem',
              }}
            />
        </td>
    </tr>
  )
}

export default EditableRow