import { useState } from "react";
import type { NextPage } from "next";
import {
  Box,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";

function createData(
  task: string,
  status: string,
  priority: string,
  create: string,
  update: string
) {
  return { task, status, priority, create, update };
}

const rows = [
  createData(
    "Github上に静的サイトをホスティングする",
    "NOT STARTED",
    "High",
    "2020-11-8 18:55",
    "2020-11-8 18:55"
  ),
  createData(
    "ReactでTodoサイトを作成する",
    "DOING",
    "Low",
    "2020-11-8 18:56",
    "2020-11-8 18:56"
  ),
  createData(
    "Firestore Hostingを学習する",
    "DONE",
    "Middle",
    "2020-11-8 18:57",
    "2020-11-8 18:57"
  ),
  createData(
    "感謝の正拳突き",
    "DOING",
    "High",
    "2020-11-8 18:58",
    "2020-11-8 18:58"
  ),
  createData(
    "二重の極み",
    "DONE",
    "High",
    "2020-11-8 18:59",
    "2020-11-8 18:59"
  ),
  createData("魔封波", "DOING", "Low", "2020-11-8 19:00", "2020-11-8 19:00"),
];

const draft: NextPage = () => {
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
        <Box  mb={3} sx={{ display: "flex", overflowX: "auto" }}>
          <Typography
            component="h1"
            variant="h4"
            mt={3}
            sx={{ fontWeight: "bold" }}
          >
            TODO DRAFT
          </Typography>
          <Link href="/">
            <SButton
              sx={{
                backgroundColor: '#9ae6b4',
                color: '#000',
                marginTop: "30px",
                marginLeft: "auto",
                '&:hover': { backgroundColor: '#9ae6b4' },
              }}
            >
              Back
            </SButton>
          </Link>
        </Box>
        <Box mb={3} sx={{ display: "flex", overflowX: "auto" }}>
          <Box mr={3} sx={{ width: "190px" }}>
            <Typography variant="h6">SEARCH</Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                border: "1px solid black",
                borderRadius: "10px",
                boxShadow: "none",
                marginTop: "16px",
                marginBottom: "8px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, fontWeight: "bold" }}
                placeholder="Text"
                inputProps={{ "aria-label": "search todo text" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Box mr={3} sx={{ width: "190px" }}>
            <Typography variant="h6">STATUS</Typography>
            <FormControl
              fullWidth
              sx={{
                border: "1px solid black",
                borderRadius: "10px",
                marginTop: "16px",
                marginBottom: "8px",
                height: "50px",
              }}
            >
              <Select value={status} onChange={statusChange}>
                <MenuItem value="NONE">- - - - - - -</MenuItem>
                <MenuItem value="NOT STARTED">NOT STARTED</MenuItem>
                <MenuItem value="DOING">DOING</MenuItem>
                <MenuItem value="DONE">DONE</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mr={3} sx={{ width: "190px" }}>
            <Typography variant="h6">PRIORITY</Typography>
            <FormControl
              fullWidth
              sx={{
                marginTop: "16px",
                marginBottom: "8px",
                border: "1px solid black",
                borderRadius: "10px",
                height: "50px",
              }}
            >
              <Select value={priority} onChange={priorityChange}>
                <MenuItem value="None">- - - - - - -</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Middle">Middle</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            mr={3}
            sx={{
              width: "190px",
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "8px",
            }}
          >
            <ResetBtn sx={{}}>RESET</ResetBtn>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ background: "#68D391" }}>
                <TableCell sx={{ fontSize: "24px", fontWeight: "bold" }}>
                  Task
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Priority
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Create
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Update
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.create}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    {row.task}
                  </TableCell>
                  <TableCell align="right">{todoStatus(row.status)}</TableCell>
                  <TableCell align="right">
                    <FormControl fullWidth>
                      <Select
                        value={row.priority}
                        sx={{
                          border: "2px solid #EC7272",
                          borderRadius: "15px",
                          textAlign: "left",
                          height: "50px",
                        }}
                      >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Middle">Middle</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    {row.create}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    {row.update}
                  </TableCell>
                  <TableCell align="right">
                    <SendIcon
                      sx={{
                        borderRadius: "8px",
                        marginRight: "10px",
                        "&:hover": {
                          background: "gray",
                          color: "white",
                        },
                      }}
                    />
                    <EditOutlinedIcon
                      sx={{
                        borderRadius: "8px",
                        marginRight: "10px",
                        "&:hover": {
                          background: "gray",
                          color: "white",
                        },
                      }}
                    />
                    <DeleteOutlineOutlinedIcon
                      sx={{
                        borderRadius: "8px",
                        "&:hover": {
                          background: "gray",
                          color: "white",
                        },
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={6} mb={3} sx={{ textAlign: "center" }}>
          <Pagination
            count={10}
            size="large"
            variant="outlined"
            shape="rounded"
            sx={{ display: "inline-block" }}
          />
        </Box>
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

// Button 共通スタイル
const SButton = styled('button')({
  height: '40px',
  width: '112px',
  borderRadius: '100px',
  border: '1px solid #000',
  fontWeight: 600,
  '&:hover': {
    opacity: 0.7,
  },
})

export default draft;
