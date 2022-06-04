import React from 'react'

import { Container, FormLabel, OutlinedInput, Typography, Box, Stack, styled } from '@mui/material'

const EditTodo = () => {
  // フォーム送信
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    console.log('title: ', data.get('title'))
    console.log('detail: ', data.get('detail'))
  }

  return (
    <>
      <Container component="div">
        <Stack spacing={2} my={3}>
          <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h2" fontSize="24px" fontWeight={600} alignSelf="center">
              EDIT TODO
            </Typography>
            <SButton
              sx={{
                backgroundColor: '#9ae6b4',
                color: '#000',
                '&:hover': { backgroundColor: '#9ae6b4' }
              }}
            >
              Back
            </SButton>
          </Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormLabel sx={{ fontWeight: 600, fontSize: '20px' }}>
                <div>TITLE</div>
                <OutlinedInput id="title" name="title" fullWidth sx={{ fontWeight: 600, borderRadius: '10px' }} />
              </FormLabel>
              <FormLabel sx={{ fontWeight: 600, fontSize: '20px' }}>
                <div>DETAIL</div>
                <OutlinedInput
                  id="detail"
                  name="detail"
                  fullWidth
                  multiline
                  sx={{
                    minHeight: '280px',
                    alignItems: 'start',
                    fontWeight: 600,
                    borderRadius: '10px'
                  }}
                />
              </FormLabel>
              <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box display="flex">
                  <Box mr={2}>
                    <Typography>Create</Typography>
                    <p style={{ margin: '0 0 0 10px', fontWeight: 600 }}>2022-5-8 18:55</p>
                  </Box>
                  <Box>
                    <Typography>Update</Typography>
                    <p style={{ margin: '0 0 0 10px', fontWeight: 600 }}>2022-5-9 20:00</p>
                  </Box>
                </Box>
                <SButton
                  type="submit"
                  sx={{
                    bgcolor: '#38a169',
                    color: '#fff',
                    '&:hover': { bgcolor: '#38a169' }
                  }}
                >
                  UPDATE
                </SButton>
              </Box>
            </Stack>
          </form>
        </Stack>
      </Container>
    </>
  )
}

// Button 共通スタイル
const SButton = styled('button')({
  height: '40px',
  width: '112px',
  borderRadius: '100px',
  border: '1px solid #000',
  fontWeight: 600,
  '&:hover': {
    opacity: 0.7
  }
})

export default EditTodo
