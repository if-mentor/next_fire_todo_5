import { TextareaAutosize } from "@material-ui/core";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { Header } from "../components/Header";



export default function CreateTodo() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      detail: data.get("detail"),
      priority: data.get("priority")
    });
  };
 
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl" >
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
          <Box
            sx={{
              marginLeft: 85
            }}
          >
            <Button 
              variant="contained"
              sx={{
                    mt: 3,
                    mb: 2,
                    background: "#68D391",
                      "&:hover": {
                      background: "#68D391",
                      opacity: [0.9, 0.8, 0.7],
                        },
                    borderRadius: 25
                      }}
                    >
                Back
            </Button>
          </Box>
          <Box
          sx={{
            alignItems: "left",
          }}
          >
          <Typography component="h1" variant="h4">NEW TODO</Typography>   
          </Box>    
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
          <Typography component="h2" variant="h6">TITLE</Typography>
            <TextField
              margin="normal"
              required
              sx={{
                width: 800
              }}
              id="title"
              label="Text"
              name="title"
              autoComplete="title"
              autoFocus
            />
          <Typography component="h2" variant="h6">DETAIL</Typography>
          <TextareaAutosize
          style={{
            resize: "none",
            width: 800,
            height: 200
          }}
            required
            name="detail"
            id="detail"
            autoComplete="detail"
            placeholder="Text"

          />
          <br />
          <FormControl >
            <FormLabel id="priority">PRIORITY</FormLabel>
            <RadioGroup
              row
              aria-labelledby="priority"
              defaultValue="priority"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="high" control={<Radio />} label="High" />
              <FormControlLabel value="middle" control={<Radio />} label="Middle" />
              <FormControlLabel value="low" control={<Radio />} label="Low" />
            </RadioGroup>
          </FormControl>
            <Box
              sx={{
                marginLeft: 75
                }}
            >
              <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      color: "#333333",
                      background: "#fce2ea",
                      "&:hover": {
                        background: "#ffefd5",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      borderRadius: 25 ,
                      marginRight: 2,
                    }}
                  >
                    DRAFT
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      background: "#26855A",
                      "&:hover": {
                        background: "#2bb32b",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      borderRadius: 25,
                    }}
                  >
                    CREATE
                  </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
