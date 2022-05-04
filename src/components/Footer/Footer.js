import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGoogleSquare } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  return (
      <Box
      className='footer'
      >
        <Grid 
            maxWidth='xxl'
            container
            direction='row'
            justifyContent='space-evenly'
            alignItems='center'
            sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#081354d9',
            color: 'white',
            paddingTop: '1rem',
            paddingBottom: '1rem',
        }}>
            <Grid item xs={12} md={6}>
                <Box className='footer-text'>
                    Copyright © 2022 All Rights Reserved by Joback
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box>
                    <AiFillFacebook size={40} xs={10} className='react-icons' />
                    <AiFillGoogleSquare size={40} className='react-icons' />
                    <AiFillTwitterSquare size={40} className='react-icons' />
                    <AiFillLinkedin size={40} className='react-icons' />
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer