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
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Header } from "../components/Header";
import { useState } from "react";

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);

  const togglePassword = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    const checkPassword = data.get("checkPassword");

    if (password === checkPassword) {
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
    } else {
      alert("パスワードが間違っています");
    }
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            サインアップ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                type={isVisible ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePassword}
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      {isVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                label="password"
              />
            </FormControl>

            <TextField
              type={isVisible ? "text" : "password"}
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
                background: "#68D391",
                "&:hover": {
                  background: "#68D391",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              サインアップ
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
