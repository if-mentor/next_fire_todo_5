import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { auth } from '../firebaseConfig'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isLoginState, uidState } from '../atoms'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const setUid = useSetRecoilState(uidState)

  const clickLogin = () => {
    router.push('/login')
  }

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
          <a>
            <Typography component="h1" style={{ fontSize: '48px', marginLeft: '60px' }}>
              TODO
            </Typography>
          </a>
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
          onClick={isLogin ? clickLogout : clickLogin}
        >
          {isLogin ? 'ログアウト' : 'ログイン'}
        </Button>
      </Box>
    </>
  )
}
