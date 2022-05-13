import type { NextPage } from 'next'
import { Box, Button, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Header } from '../components/Header'
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';

const detail: NextPage = () => {
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="xl"
      >
      <CssBaseline />
        <Box sx={{ textAlign: "right", mb: -5}} >
          <Button variant="contained" sx={{ mt: 3, mb: 2, mr: 5, background: "#008753", "&:hover": { background: "#68D391", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', fontWeight: "bold", fontSize: 18  }}>
            Comment
          </Button>
          <Button variant="contained" sx={{ pl: 4, pr: 4, mt: 3, mb: 2, mr: 5, background: "#68D391", "&:hover": { background: "#68D391", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "black", fontWeight: "bold", fontSize: 18 }}>
            Back
          </Button>
        </Box>

      <Box className='big'>
        <Box>
          <Typography
            component="h1"
            variant="h4"
            mb={2}
            sx={{ fontWeight: "bold" }}
          >
            SHOW TODO
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ border: 1, borderRadius: 4, p: 2 }}>
              <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}>
                      TITLE
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell
                      sx={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      aaaaaaaaa
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}>
                      DETAIL
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell
                      sx={{ fontSize: "18px", fontWeight: "bold", height: "240px", verticalAlign: "top", wordBreak: "break-word"}}
                    >
                      aaaahfeihfuhwfiuhewoijfiowejfiojwfijewiofjiowejfioewjiofjwioejifjfiowjeiojf
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ display: 'flex'}}>
                <Button variant="contained" sx={{ pl: 5, mr: 10, mt: 2, mb: 2, background: "#68D391", "&:hover": { background: "#68D391", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "black", fontWeight: "bold", fontSize: "20px" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>Edit</Typography>
                  <Box component="span" sx={{ p: 2 }} /><EditIcon/>
                </Button>
                <Box sx={{ mr: 10, mt: 1.5, mb: 2 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>Create</Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: 23 }}>2020-11-8 18:55</Typography>
                </Box >
                <Box sx={{ mt: 1.5, mb: 2}}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>Update</Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: 23 }}>2020-11-8 18:55</Typography>
                </Box>
              </Box>
            </Box>

            <Box component="span" sx={{ p: 2 }} />

            <Box>
              <TableContainer component={Paper} sx={{ mb: 2, border: 1, borderRadius: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead >
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#008753", display: "flex", color: "#FFF" }}>
                      Task
                      <Typography sx={{ ml: 50, fontWeight: "bold", fontSize: 18, color: "#FFF" }}>2020-11-8 18:55</Typography>
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      aaaa
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper} sx={{ mb: 2, border: 1, borderRadius: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#008753", display: "flex", color: "#FFF" }}>
                      Task
                      <Typography sx={{ ml: 50, fontWeight: "bold", fontSize: 18, color: "#FFF" }}>2020-11-8 18:55</Typography>
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      aaaa
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper} sx={{ mb: 2, border: 1, borderRadius: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#008753", display: "flex", color: "#FFF" }}>
                      Task
                      <Typography sx={{ ml: 50, fontWeight: "bold", fontSize: 18, color: "#FFF" }}>2020-11-8 18:55</Typography>
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      aaaa
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper} sx={{ border: 1, borderRadius: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#008753", display: "flex", color: "#FFF" }}>
                      Task
                      <Typography sx={{ ml: 50, fontWeight: "bold", fontSize: 18, color: "#FFF" }}>2020-11-8 18:55</Typography>
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      aaaa
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
)}

export default detail