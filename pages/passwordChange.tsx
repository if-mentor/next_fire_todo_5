
import React from "react";
import { Header } from "../components/Header";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

const passwordChange = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            パスワード変更
          </Typography>

          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <FormControl sx={{ mt: 2 }} fullWidth variant="outlined">
              <TextField
                margin="normal"
                required
                fullWidth
                id="newPassword"
                label="パスワード"
                name="checkPassword"
                autoComplete="checkPassword"
                autoFocus
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                margin="normal"
                required
                fullWidth
                id="checknewPassword"
                label="新しいパスワード(確認用)"
                name="checkPassword"
                autoComplete="checkPassword"
                autoFocus
              />
            </FormControl>
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
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              パスワードを変更
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default passwordChange;