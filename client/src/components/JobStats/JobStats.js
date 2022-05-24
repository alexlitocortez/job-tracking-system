import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const JobStats = () => {

  return (
    <div>
        <Box 
        sx={{ 
          width: '50vw', 
          fontFamily: 'Oswald', 
          fontSize: '1.5rem', 
          backgroundColor: '#d1dcebd9', 
          padding: '4rem', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          borderRadius: '10px', 
          boxShadow: '1px 1px 0.5px black' }}>
              Job Stats
            <Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
      </Box>
    </div>
  )
}

export default JobStats