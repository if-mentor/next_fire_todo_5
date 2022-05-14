import type { NextPage } from 'next'
import { Box, Button, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Header } from '../components/Header'
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
        <Box sx={{ textAlign: "right", marginLeft: "auto" }} >
           <Button variant="contained" sx={{ pl: 4, pr: 4, mt: 3, mb: 2, mr: 2, background: "#ec7272", "&:hover": { background: "#ec7171", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 18  }}>
            Delete All
           </Button>
           <Button variant="contained" sx={{ pl: 4, pr: 4, mt: 3, mb: 2, mr: 2, background: "#62b1ea", "&:hover": { background: "#62bcca", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 18  }}>
            Restore ALL
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
            TRASH
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', overflowX: "auto" }}>
            <Box sx={{  p: 2 }}>
              <TableContainer >
                <Table sx={{ minWidth: 850 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391", paddingRight: 20}}>
                        Task
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}
                      >
                        Status
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}
                      >
                        Priority
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}
                      >
                        Create
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "24px", fontWeight: "bold", background: "#68D391" }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>            
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        aaaa
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                       <Button variant="contained" sx={{  background: "#f0fff4", "&:hover": { background: "#fff", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "black", fontWeight: "bold", fontSize: 8 }}>
                        NOT STARTED
                       </Button>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold", color: "#9a5656" }}
                        >
                          High
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold" }}
                        >
                          2020-11-8 18:55
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                          <Button variant="contained" sx={{ mr: 1, background: "#ec7272", "&:hover": { background: "#ec7171", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Delete
                          </Button>
                          <Button variant="contained" sx={{ mr: 1, background: "#62b1ea", "&:hover": { background: "#62bcca", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Restore
                          </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        aaaa
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                       <Button variant="contained" sx={{  background: "#26855a", "&:hover": { background: "#26844a", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "white", fontWeight: "bold", fontSize: 11 }}>
                        DOING
                       </Button>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold", color: "#9a5656" }}
                        >
                          High
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold" }}
                        >
                          2020-11-8 18:55
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                          <Button variant="contained" sx={{ mr: 1, background: "#ec7272", "&:hover": { background: "#ec7171", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Delete
                          </Button>
                          <Button variant="contained" sx={{ mr: 1, background: "#62b1ea", "&:hover": { background: "#62bcca", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Restore
                          </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        aaaa
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                       <Button variant="contained" sx={{  background: "#68d391", "&:hover": { background: "#68d388", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "black", fontWeight: "bold", fontSize: 11 }}>
                        DONE
                       </Button>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold", color: "#bdeacb" }}
                        >
                          Middle
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold" }}
                        >
                          2020-11-8 18:55
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                          <Button variant="contained" sx={{ mr: 1, background: "#ec7272", "&:hover": { background: "#ec7171", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Delete
                          </Button>
                          <Button variant="contained" sx={{ mr: 1, background: "#62b1ea", "&:hover": { background: "#62bcca", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Restore
                          </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        aaaa
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                       <Button variant="contained" sx={{  background: "#26855a", "&:hover": { background: "#26844a", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "white", fontWeight: "bold", fontSize: 11 }}>
                        DOING
                       </Button>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold", color: "#a6a6a6" }}
                        >
                          Low
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold" }}
                        >
                          2020-11-8 18:55
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                          <Button variant="contained" sx={{ mr: 1, background: "#ec7272", "&:hover": { background: "#ec7171", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Delete
                          </Button>
                          <Button variant="contained" sx={{ mr: 1, background: "#62b1ea", "&:hover": { background: "#62bcca", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Restore
                          </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        aaaa
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                       <Button variant="contained" sx={{  background: "#26855a", "&:hover": { background: "#26844a", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "white", fontWeight: "bold", fontSize: 11 }}>
                        DOING
                       </Button>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold", color: "#bdeacb" }}
                        >
                          Middle
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold" }}
                        >
                          2020-11-8 18:55
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                          <Button variant="contained" sx={{ mr: 1, background: "#ec7272", "&:hover": { background: "#ec7171", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Delete
                          </Button>
                          <Button variant="contained" sx={{ mr: 1, background: "#62b1ea", "&:hover": { background: "#62bcca", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Restore
                          </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        aaaa
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                       <Button variant="contained" sx={{  background: "#26855a", "&:hover": { background: "#26844a", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, border: 1, borderColor: 'text.primary', color: "white", fontWeight: "bold", fontSize: 11 }}>
                        DOING
                       </Button>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold", color: "#a6a6a6" }}
                        >
                          Low
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        <Typography
                          component="p"
                          variant="h6"
                          mb={2}
                          sx={{ fontWeight: "bold" }}
                        >
                          2020-11-8 18:55
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                          <Button variant="contained" sx={{ mr: 1, background: "#ec7272", "&:hover": { background: "#ec7171", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Delete
                          </Button>
                          <Button variant="contained" sx={{ mr: 1, background: "#62b1ea", "&:hover": { background: "#62bcca", opacity: [0.9, 0.8, 0.7] }, borderRadius: 25, borderColor: 'text.primary', fontWeight: "bold", fontSize: 11  }}>
                            Restore
                          </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            <Box component="span" 
            sx={{ 
              display: "flex",
              mt: 5, 
               }} 
            />
              <Button
                size="small"
                sx={{
                  ml: 30,
                  padding: 0,
                  backgroundColor: "#b5b5b5",
                  color: "white",
                  "&:hover": {
                    color: "#b5b5b5"
                  }
                }}
              >
                ＜
              </Button>
              <Button
                size="small"
                sx={{
                  ml: 1,
                  padding: 0,
                  backgroundColor: "#fff",
                  color: "#4c4c4c",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#b5b5b5",
                    color: "#fff"
                  }
                }}
              >
                1
              </Button>
              <Button
                size="small"
                sx={{
                  ml: 1,
                  padding: 0,
                  backgroundColor: "#fff",
                  color: "#4c4c4c",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#b5b5b5",
                    color: "#fff"
                  }
                }}
              >
                2
              </Button>
              <Button
                size="small"
                sx={{
                  ml: 1,
                  padding: 0,
                  backgroundColor: "#fff",
                  color: "#4c4c4c",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#b5b5b5",
                    color: "#fff"
                  }
                }}
              >
                …
              </Button>
              <Button
                size="small"
                sx={{
                  ml: 1,
                  padding: 0,
                  backgroundColor: "#fff",
                  color: "#4c4c4c",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#b5b5b5",
                    color: "#fff"
                  }
                }}
              >
                5
              </Button>
              <Button
                size="small"
                sx={{
                  ml: 1,
                  padding: 0,
                  backgroundColor: "#fff",
                  color: "#4c4c4c",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#b5b5b5",
                    color: "#fff"
                  }
                }}
              >
                6
              </Button>
              <Button
                size="small"
                sx={{
                  ml: 1,
                  padding: 0,
                  backgroundColor: "#fff",
                  color: "#4c4c4c",
                  border: 1,
                  "&:hover": {
                    backgroundColor: "#b5b5b5",
                    color: "#fff"
                  }
                }}
              >
                ＞
              </Button>
            <Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
)}

export default detail
