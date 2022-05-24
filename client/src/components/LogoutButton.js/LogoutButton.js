import React from 'react'
import './LogoutButton.css'
import LogoutIcon from '@mui/icons-material/Logout'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const LogoutButton = () => {
  return (
    <div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <LogoutIcon className='react-icon-logout-button' />
      </Link>
    </div>
  )
}

export default LogoutButton
