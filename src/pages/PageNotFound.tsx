import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

const primary = red['A700'];

function PageNotFound() {
  return (
    <Box
        sx={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: primary
            }
        }
    >
        <Typography variant='h1' component='h1' color='white'>
            404 page not found
        </Typography>

        <Typography variant='h6' component='h6' color='white' sx={{mb: 3}}>
            The page you are looking for does not exist.
        </Typography>

        <Button
            variant='contained'
            color='inherit'
            href="/"
        >
            Go to Home Page
        </Button>
    </Box>
  )
}

export default PageNotFound