import { useState } from "react";
import type { NextPage } from "next";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Modal,
  Pagination,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function createData(
  id: number,
  task: string,
  status: string,
  priority: string,
  create: string,
  update: string
) {
  return { id, task, status, priority, create, update };
}



const rows = [
  createData(
    1,
    "Github上に静的サイトをホスティングする",
    "NOT STARTED",
    "High",
    "2020-11-8 18:55",
    "2020-11-8 18:55"
  ),
  createData(
    2,
    "ReactでTodoサイトを作成する",
    "DOING",
    "Low",
    "2020-11-8 18:56",
    "2020-11-8 18:56"
  ),
  createData(
    3,
    "Firestore Hostingを学習する",
    "DONE",
    "Middle",
    "2020-11-8 18:57",
    "2020-11-8 18:57"
  ),
  createData(
    4,
    "感謝の正拳突き",
    "DOING",
    "High",
    "2020-11-8 18:58",
    "2020-11-8 18:58"
  ),
  createData(
    5,
    "二重の極み",
    "DONE",
    "High",
    "2020-11-8 18:59",
    "2020-11-8 18:59"
  ),
  createData(6, "魔封波", "DOING", "Low", "2020-11-8 19:00", "2020-11-8 19:00"),
];

const page404: NextPage = () => {
  const [status, setStatus] = useState("NONE");
  const [priority, setPriority] = useState("None");


  const statusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const priorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const todoStatus = (status: string) => {
    switch (status) {
      case "NOT STARTED":
        return <NotStartedComponent>{status}</NotStartedComponent>;
      case "DOING":
        return <DoingComponent>{status}</DoingComponent>;
      case "DONE":
        return <DoneComponent>{status}</DoneComponent>;
    }
  };

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
