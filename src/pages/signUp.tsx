import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  TextField,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import useSnackbar from '../hooks/useSnackbar'
import { auth } from '../firebaseConfig'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isLoginState, uidState } from '../atoms'

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false)
  const { setMessage, AlertSnackbar } = useSnackbar()
  const router = useRouter()
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const setUid = useSetRecoilState(uidState)

  useEffect(() => {
    if (isLogin === true) {
      router.push('/')
    }
  }, [isLogin])

  const togglePassword = () => {
    setIsVisible((prevState) => !prevState)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const userName = data.get('userName') !== null ? data.get('userName')!.toString() : ''
    const email = data.get('email') !== null ? data.get('email')!.toString() : ''
    const password = data.get('password') !== null ? data.get('password')!.toString() : ''
    const checkPassword = data.get('checkPassword') !== null ? data.get('checkPassword')!.toString() : ''

    if (userName === '') {
      setMessage('ユーザーネームが入力されていません')
      return
    }

    if (userName.length >= 15) {
      setMessage('ユーザーネームは15文字以上入力できません')
      return
    }

    if (email === '') {
      setMessage('メールアドレスが入力されていません')
      return
    }

    // メールアドレスの正規表現
    const pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/

    if (!pattern.test(email)) {
      setMessage('メールアドレスに不正な値が入力されています')
      return
    }

    if (password === '') {
      setMessage('パスワードが入力されていません')
      return
    }

    if (password.length < 6) {
      setMessage('パスワードが6文字以上入力されていません')
      return
    }

    if (password !== checkPassword) {
      setMessage('パスワードが一致していません')
      return
    }

    if (password === password.slice(0, 1).repeat(password.length)) {
      setMessage('パスワードが全て同じ文字です')
      return
    }

    // Firebase Authを使い、メールアドレスとパスワードを登録
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLogin(true)
        setUid(userCredential.user.uid)
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code

        switch (errorCode) {
          case 'auth/cancelled-popup-request':
          case 'auth/popup-closed-by-user':
            return
          case 'auth/email-already-in-use':
            setMessage('このメールアドレスは使用されています')
            return
          case 'auth/invalid-email':
            setMessage('メールアドレスの形式が正しくありません')
            return
          case 'auth/user-disabled':
            setMessage('サービスの利用が停止されています')
            return
          case 'auth/user-not-found':
            setMessage('メールアドレスまたはパスワードが違います')
            return
          case 'auth/user-mismatch':
            setMessage('認証されているユーザーと異なるアカウントが選択されました')
            return
          case 'auth/weak-password':
            setMessage('パスワードは6文字以上にしてください')
            return
          case 'auth/wrong-password':
            setMessage('メールアドレスまたはパスワードが違います')
            return
          case 'auth/popup-blocked':
            setMessage(
              '認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください'
            )
            return
          case 'auth/operation-not-supported-in-this-environment':
          case 'auth/auth-domain-config-required':
          case 'auth/operation-not-allowed':
          case 'auth/unauthorized-domain':
            setMessage('現在この認証方法はご利用頂けません')
            return
          case 'auth/requires-recent-login':
            setMessage('認証の有効期限が切れています')
            return
          default:
            setMessage('認証に失敗しました。しばらく時間をおいて再度お試しください')
            return
        }
      })
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            サインアップ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="ユーザーネーム"
              name="userName"
              autoComplete="userName"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Eメールアドレス"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">パスワード*</InputLabel>
              <OutlinedInput
                id="password"
                type={isVisible ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={togglePassword} aria-label="toggle password visibility" edge="end">
                      {isVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                label="password"
              />
            </FormControl>

            <TextField
              type={isVisible ? 'text' : 'password'}
              margin="normal"
              required
              fullWidth
              id="checkPassword"
              label="パスワード(確認用)"
              name="checkPassword"
              autoComplete="checkPassword"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: '#68D391',
                '&:hover': {
                  background: '#68D391',
                  opacity: [0.9, 0.8, 0.7]
                }
              }}
            >
              サインアップ
            </Button>
          </Box>
        </Box>
        <AlertSnackbar />
      </Container>
    </>
  )
}
