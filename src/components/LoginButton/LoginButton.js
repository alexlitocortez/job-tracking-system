import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
        <Button variant="contained" onClick={() => loginWithRedirect()}
            sx={{
            fontWeight: '700',
            padding: '1rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3rem',
            width: '50%'
            }}>
            Login
        </Button>
    </div>
  )
}

export default LoginButton