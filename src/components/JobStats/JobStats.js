import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


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
              <Grid item xs={6}>
                Jobs Applied To Today:
              </Grid>
              <Grid item xs={6}>

              </Grid>
            </Grid>
            <Grid>
              <Grid item xs={6}>
              
              </Grid>
              <Grid item xs={6}>

              </Grid>
            </Grid>
            <Grid>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={6}>

              </Grid>
            </Grid>
      </Box>
    </div>
  )
}

export default JobStats