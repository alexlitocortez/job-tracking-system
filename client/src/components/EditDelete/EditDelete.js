import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)`
  && {
    background-color: red;
    border-radius: 0;
    color: white;
    border-radius: 4px;
  },
  &&:hover {
      opacity: 0.8;
  }
`;

function EditDelete() {

  return (
    <div>
        <Box
        sx={{
        display: 'flex',
        flexDirection: 'column'
        }}
        >
            <StyledButton
            style={{
                backgroundColor: '#097969'
            }}
            >
                Edit
            </StyledButton>
            <StyledButton
            style={{
                backgroundColor: '#A52A2A'
            }}
            >
                Delete
            </StyledButton>
        </Box>
    </div>
  )
}

export default EditDelete