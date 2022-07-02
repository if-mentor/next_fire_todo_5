import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Container from '@mui/material/Container'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { Todo } from '../types/todo'
import { parseTimestampToDate } from '../utils/DataFormat'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

const Detail: NextPage = () => {
  const [todo, setTodo] = useState<Todo | null>(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    // データ取得
    if (id !== undefined) {
      ;(async () => {
        const docSnap = await getDoc(doc(db, 'todos', id as string))
        docSnap.exists() && setTodo({ ...(docSnap.data() as Todo) })
      })()
    }
  }, [id])

  if (todo != null) {
    return (
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box className="big">
          <Box sx={{ textAlign: 'right', marginLeft: 'auto' }}>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                mr: 5,
                background: '#008753',
                '&:hover': { background: '#68D391', opacity: [0.9, 0.8, 0.7] },
                borderRadius: 25,
                border: 1,
                borderColor: 'text.primary',
                fontWeight: 'bold',
                fontSize: 18
              }}
            >
              Comment
            </Button>
            <Link href={'/'}>
              <Button
                variant="contained"
                sx={{
                  pl: 4,
                  pr: 4,
                  mt: 3,
                  mb: 2,
                  mr: 5,
                  background: '#68D391',
                  '&:hover': { background: '#68D391', opacity: [0.9, 0.8, 0.7] },
                  borderRadius: 25,
                  border: 1,
                  borderColor: 'text.primary',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 18
                }}
              >
                Back
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography component="h1" variant="h4" mb={2} sx={{ fontWeight: 'bold' }}>
              SHOW TODO
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ border: 1, borderRadius: 4, p: 2 }}>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontSize: '24px', fontWeight: 'bold', background: '#68D391' }}>
                          TITLE
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>{todo.title}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontSize: '24px', fontWeight: 'bold', background: '#68D391' }}>
                          DETAIL
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            height: '240px',
                            verticalAlign: 'top'
                          }}
                        >
                          <Box height="220px" width="650px" overflow="scroll" sx={{ background: 'white' }}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-body">
                              {todo.detail}
                            </ReactMarkdown>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Box sx={{ display: 'flex' }}>
                  <Link href={`editTodo?id=${todo.id}`}>
                    <Button
                      variant="contained"
                      sx={{
                        pl: 5,
                        mr: 10,
                        mt: 2,
                        mb: 2,
                        background: '#68D391',
                        '&:hover': { background: '#68D391', opacity: [0.9, 0.8, 0.7] },
                        borderRadius: 25,
                        border: 1,
                        borderColor: 'text.primary',
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '20px'
                      }}
                    >
                      <Typography textTransform="none" sx={{ fontWeight: 'bold', fontSize: 18 }}>
                        Edit
                      </Typography>
                      <Box component="span" sx={{ p: 2 }} />
                      <EditIcon />
                    </Button>
                  </Link>

                  <Box sx={{ mr: 10, mt: 1.5, mb: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Create</Typography>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                      {parseTimestampToDate(todo.create, '-', true)}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1.5, mb: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Update</Typography>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                      {parseTimestampToDate(todo.update, '-', true)}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box component="span" sx={{ p: 2 }} />

              <Box>
                <TableContainer component={Paper} sx={{ mb: 2, border: 1, borderRadius: 4 }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            background: '#008753',
                            display: 'flex',
                            color: '#FFF'
                          }}
                        >
                          Task
                          <Typography sx={{ ml: 50, fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>
                            2020-11-8 18:55
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                          aaaa
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer component={Paper} sx={{ mb: 2, border: 1, borderRadius: 4 }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            background: '#008753',
                            display: 'flex',
                            color: '#FFF'
                          }}
                        >
                          Task
                          <Typography sx={{ ml: 50, fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>
                            2020-11-8 18:55
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                          aaaa
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer component={Paper} sx={{ mb: 2, border: 1, borderRadius: 4 }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            background: '#008753',
                            display: 'flex',
                            color: '#FFF'
                          }}
                        >
                          Task
                          <Typography sx={{ ml: 50, fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>
                            2020-11-8 18:55
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                          aaaa
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer component={Paper} sx={{ border: 1, borderRadius: 4 }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            background: '#008753',
                            display: 'flex',
                            color: '#FFF'
                          }}
                        >
                          Task
                          <Typography sx={{ ml: 50, fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>
                            2020-11-8 18:55
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                          aaaa
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    )
  } else {
    return <CircularProgress />
  }
}

export default Detail
