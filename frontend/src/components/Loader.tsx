import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box height={'100vh'}>
        <CircularProgress color='error' />
    </Box>
  )
}

export default Loader