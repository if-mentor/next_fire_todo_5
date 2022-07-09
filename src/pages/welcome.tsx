import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

export default function Login() {
  return (
      <Container
        component="main"
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        }}
      >
        <CssBaseline />
        <Typography component="h1" variant="h4" mt={3} mb={2} sx={{ fontWeight: 'bold' }}>
          Welcomeページ
        </Typography>
        <Typography component="p" mt={3} mb={2}>
          Todoアプリへようこそ!! こちらのアプリではログインが必須です。
        </Typography>
        <Box>
          <Typography component="a" mt={3} mb={2}>
            新規登録は
            <Link href="/signUp">
              <Typography component="a" mt={3} mb={2} sx={{ color: "blue"}}>こちら</Typography>
            </Link>
            をクリック
          </Typography>
        </Box>
        <Box>
          <Typography component="a" mt={3} mb={2}>
            ログインは
            <Link href="/login">
              <Typography component="a" mt={3} mb={2} sx={{ color: "blue"}}>こちら</Typography>
            </Link>
            をクリック
          </Typography>
        </Box>
        <Typography component="p" mt={3}>
          テストユーザーとして、以下のアカウント情報でログイン可能です
        </Typography>
        <Typography component="p">
          メールアドレス: yuki@gmail.com
        </Typography>
        <Typography component="p">
          パスワード: yukiyuki
        </Typography>
      </Container>
  )
}