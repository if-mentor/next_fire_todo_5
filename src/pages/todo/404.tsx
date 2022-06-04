import { useState } from "react";
import type { NextPage } from "next";
import {
  Container,
  CssBaseline,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";



const page404: NextPage = () => {

  return (
    <>
      <Container
        component="main"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <CssBaseline />
        <Typography
          component="h1"
          variant="h2"
          mt={3}
          mb={2}
          sx={{ fontWeight: "bold" }}
        >
          404 Not Found
        </Typography>

      </Container>
    </>
  );
};

const ResetBtn = styled("button")({
  background: "#B5B5B5",
  border: "1px solid black",
  borderRadius: "50px",
  color: "black",
  fontSize: "20px",
  fontWeight: "bold",
  height: "50px",
  padding: "10px 20px",
  verticalAlign: "bottom",
  "&:hover": {
    background: "#858585",
    color: "white",
  },
});

const NotStartedComponent = styled("div")({
  boxSizing: "border-box",
  background: "#F0FFF4",
  border: "1px solid rgba(0, 0, 0, 0.8)",
  borderRadius: "50px",
  color: "black",
  fontSize: "12px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "14px 0px",
});

const DoingComponent = styled("div")({
  boxSizing: "border-box",
  background: "#25855A",
  border: "1px solid rgba(0, 0, 0, 0.8)",
  borderRadius: "50px",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "10px",
});

const DoneComponent = styled("div")({
  boxSizing: "border-box",
  background: "#68D391",
  border: "1px solid rgba(0, 0, 0, 0.8)",
  borderRadius: "50px",
  color: "black",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "10px",
});

const icon = {
  positon: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  margin: "auto",
  width: "100%",
  height: "100%",
};


export default page404;
