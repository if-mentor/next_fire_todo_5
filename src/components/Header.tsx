import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { auth } from '../firebaseConfig'

export const Header = () => {
  const clickLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('ログアウト完了')
      })
      .catch((error) => {
        console.log('ログアウト失敗')
        console.log(error)
      })
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '80px',
          background: '#68D391'
        }}
      >
        <Link href="/">
          <Typography component="h1" style={{ fontSize: '48px', marginLeft: '60px' }}>
            TODO
          </Typography>
        </Link>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mr: 10,
            ml: 'auto',
            mb: 2,
            background: '#68D391',
            '&:hover': {
              background: '#68D391',
              opacity: [0.9, 0.8, 0.7]
            }
          }}
          onClick={clickLogout}
        >
          ログアウト
        </Button>
      </Box>
    </>
  )
}
