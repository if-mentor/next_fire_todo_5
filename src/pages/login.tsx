import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material'
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput, schema } from '../FormValidation'
import { useForm, SubmitHandler } from 'react-hook-form'

export default function Login() {
  const router = useRouter()
  // const handleSubmit = (event: any) => {
  //   event.preventDefault()
  //   const { email, password } = event.target.elements
  //   signInWithEmailAndPassword(auth, email.value, password.value)
  //     .then((userCredential) => {
  //       router.push('/test')
  //       alert('サインアップが完了しました。')
  //       console.log(userCredential)
  //     })
  //     .catch((error) => {
  //       console.log('こちらのメールアドレスは登録できませんでした。')
  //       console.error(error)
  //     })
  //   console.log(email.value)
  //   console.log(password.value)
  // }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput, event: any) => {
    event.preventDefault()
    const { email, password } = data
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      router.push('/')
      alert('サインアップが完了しました。')
      console.log(userCredential)
    })
    console.log(email)
    console.log(password)
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>{/* <LockOutlinedIcon /> */}</Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <Box
            // component="form"
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Eメールアドレス"
              type="email"
              // name="email"
              autoComplete="email"
              autoFocus
              {...register('email')}
              error={'email' in errors}
              helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              // name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password')}
              error={'password' in errors}
              helperText={errors.password?.message}
            />
            <Button
              // type="submit"
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
              onClick={handleSubmit(onSubmit)}
            >
              ログイン
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}
