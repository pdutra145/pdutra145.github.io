import { Box, Stack } from '@mui/material'
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const ArticleForms = () => {
  return (
    <Stack>
        <Box justifyContent={'start'}>
            <Link component={RouterLink} to='/artigos' >Voltar para Artigos</Link>
        </Box>
    </Stack>
  )
}

export default ArticleForms