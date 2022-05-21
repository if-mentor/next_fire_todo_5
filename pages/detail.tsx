import type { NextPage } from 'next'
import { Box, Button, CssBaseline, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
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
      <Box >
        <Box sx={{ textAlign: "right", marginLeft: "auto" }} >
          <Button variant="contained" sx={{ mt: 3, mb: 2, mr: 5, background: "#008753", "&:hover": { background: "#68D391", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', fontWeight: "bold", fontSize: 18  }}>
            Comment
          </Button>
          <Button variant="contained" sx={{ pl: 4, pr: 4, mt: 3, mb: 2, mr: 5, background: "#68D391", "&:hover": { background: "#68D391", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "black", fontWeight: "bold", fontSize: 18 }}>
            Back
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            component="h1"
            variant="h4"
            mb={2}
            sx={{ fontWeight: "bold" }}
          >
            SHOW TODO
          </Typography>
        </Box>
        <Box sx={{ height: "540px", overflow: "hidden", display: 'flex' }} >
          <Box sx={{ width: "50%", border: 1, borderRadius: 4, p: 2, mr: 2 }}>
            <TableContainer >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}>
                      TITLE
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  <OutlinedInput
                    id="detail"
                    name="detail"
                    fullWidth
                    multiline
                    sx={{
                      alignItems: 'start',
                      fontWeight: 600,
                    }}
                  />
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}>
                      DETAIL
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  <OutlinedInput
                    id="detail"
                    name="detail"
                    fullWidth
                    multiline
                    sx={{
                      minHeight: '240px',
                      alignItems: 'start',
                      fontWeight: 600,
                    }}
                  />
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex'}}>
              <Button variant="contained" sx={{ pl: 5, mr: 5, mt: 2, mb: 2, background: "#68D391", "&:hover": { background: "#68D391", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "black", fontWeight: "bold", fontSize: "20px" }}>
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
          <Box sx={{ width: "50%", ml: 2, overflowY: "scroll" }}>
            <TableContainer sx={{ mb: 2, border: 1, borderRadius: 4, height: "148px" }}>
              <Table sx={{ overflow: "hidden" }} aria-label="simple table">
                <TableHead >
                  <TableRow sx={{ p: "12px", width: "100%", background: "#008753", display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ ml: 2, fontSize: 24, fontWeight: "bold", color: "#FFF" }}>ジュン</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: 20, color: "#FFF", mr: 3 }}>2020-11-8 18:55</Typography>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ maxheight: "80px" }}>
                  <TableRow>
                    <Typography sx={{ fontSize: 18, fontWeight: "bold", overflow: "hidden" }}>
                      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </Typography>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ mb: 2, border: 1, borderRadius: 4, height: "148px" }}>
              <Table sx={{ overflow: "hidden" }} aria-label="simple table">
                <TableHead >
                  <TableRow sx={{ p: "12px", width: "100%", background: "#008753", display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ ml: 2, fontSize: 24, fontWeight: "bold", color: "#FFF" }}>ジュン</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: 20, color: "#FFF", mr: 3 }}>2020-11-8 18:55</Typography>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ maxheight: "80px" }}>
                  <TableRow>
                    <Typography sx={{ fontSize: 18, fontWeight: "bold", overflow: "hidden" }}>
                      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </Typography>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ mb: 2, border: 1, borderRadius: 4, height: "148px" }}>
              <Table sx={{ overflow: "hidden" }} aria-label="simple table">
                <TableHead >
                  <TableRow sx={{ p: "12px", width: "100%", background: "#008753", display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ ml: 2, fontSize: 24, fontWeight: "bold", color: "#FFF" }}>ジュン</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: 20, color: "#FFF", mr: 3 }}>2020-11-8 18:55</Typography>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ maxheight: "80px" }}>
                  <TableRow>
                    <Typography sx={{ fontSize: 18, fontWeight: "bold", overflow: "hidden" }}>
                      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </Typography>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ mb: 2, border: 1, borderRadius: 4, height: "148px" }}>
              <Table sx={{ overflow: "hidden" }} aria-label="simple table">
                <TableHead >
                  <TableRow sx={{ p: "12px", width: "100%", background: "#008753", display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ ml: 2, fontSize: 24, fontWeight: "bold", color: "#FFF" }}>ジュン</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: 20, color: "#FFF", mr: 3 }}>2020-11-8 18:55</Typography>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ maxheight: "80px" }}>
                  <TableRow>
                    <Typography sx={{ fontSize: 18, fontWeight: "bold"}}>
                      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </Typography>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
)}

export default detail