import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { auth } from '../firebaseConfig'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isLoginState, uidState } from '../atoms'

export const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const setUid = useSetRecoilState(uidState)

  const clickLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLogin(false)
        setUid('')
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
        <Link href="/login">
          <Button
            variant="contained"
            disabled={isLogin}
            sx={{
              mt: 3,
              mr: 1,
              ml: 'auto',
              mb: 2,
              background: '#68D391',
              '&:hover': {
                background: '#68D391',
                opacity: [0.9, 0.8, 0.7]
              }
            }}
          >
            ログイン
          </Button>
        </Link>

        <Button
          variant="contained"
          disabled={!isLogin}
          sx={{
            mt: 3,
            mr: 10,
            ml: 1,
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
