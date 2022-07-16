import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { auth } from '../firebaseConfig'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Drawer,
  ListItem,
  ListItemText,
  Paper,
  Snackbar,
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
import {
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore'
import { TextareaAutosize } from '@material-ui/core'
import { db } from '../firebaseConfig'
import { Todo } from '../types/todo'
import { parseTimestampToDate } from '../utils/DataFormat'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Gravatar from 'react-gravatar'

const Detail: NextPage = () => {
  const [todo, setTodo] = useState<Todo | null>(null)
  const randomId = Math.random().toString(32).substring(2)
  const [open, setOpen] = useState(false)
  const [openList, setOpenList] = useState(false)
  const router = useRouter()
  const { id } = router.query
  const user = auth.currentUser
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  const [comments, setComments] = useState([
    {
      id: randomId,
      name: '',
      detail: ''
    }
  ])
  const q = query(collection(db, 'comments'), orderBy('create'))
  useEffect(() => {
    const unSub = onSnapshot(q, (querySnapshot) => {
      setComments(
        querySnapshot.docs.map((comment) => ({
          id: comment.data().id,
          name: comment.data().name,
          detail: comment.data().detail
        }))
      )
    })
    return () => unSub()
  }, [])

  useEffect(() => {
    // データ取得
    if (id !== undefined) {
      ;(async () => {
        const docSnap = await getDoc(doc(db, 'todos', id as string))
        docSnap.exists() && setTodo({ ...(docSnap.data() as Todo) })
      })()
    }
  }, [id])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const colRef = collection(db, 'comments')
    if (data.get('comment') === '') {
      setOpen(true)
      return
    } else if (data.get('name') === '') {
      setOpen(true)
      return
    }

    const firestoreSubmit = async () => {
      await addDoc(colRef, {
        id: '',
        name: data.get('name'),
        detail: data.get('detail'),
        create: serverTimestamp(),
        author: 'userUID'
      })
      const q = await query(collection(db, 'comments'), where('id', '==', 'yet'))
      const querySnapshot = await getDocs(q)
      let docId = ''
      querySnapshot.forEach((doc) => {
        docId = doc.id
      })
    }
    firestoreSubmit()
  }

  if (todo != null) {
    return (
      <>
        <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="error">
            nameまたはcommentが入力されていません。
          </Alert>
        </Snackbar>
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
                <a onClick={() => setOpenList(true)} href="#commentform">
                  Comment
                </a>
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
                <Box sx={{ position: 'relative', border: 1, borderRadius: 4, p: 2 }}>
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
                        {parseTimestampToDate(todo.create, '-')}
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 1.5, mb: 2 }}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Update</Typography>
                      <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                        {parseTimestampToDate(todo.update, '-')}
                      </Typography>
                    </Box>
                  </Box>

                  <Box component="span" sx={{ justifyContent: 'left' }} />
                </Box>

                <Box sx={{ minWidth: 500, position: 'relative', ml: 3 }}>
                  <Box component={Paper} height="550px" sx={{ mb: 2, border: 1, borderRadius: 4 }} overflow="scroll">
                    <Typography
                      width="100%"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        mb: 2,
                        pl: 2,
                        height: '40px',
                        borderRadius: 1,
                        fontSize: '24px',
                        fontWeight: 'bold',
                        background: '#68D391',
                        zIndex: 100
                      }}
                    >
                      CommentList
                    </Typography>
                    <Box sx={{ marginBottom: 5 }} />
                    {comments.map((comment) => (
                      <ListItem divider key={comment.id}>
                        <ListItemText sx={{ fontWeight: 'bold', minWidth: 50 }}>
                          <Gravatar size={40} email="samonkntd@gmail.com" />
                          <br />
                          {comment.name}
                        </ListItemText>
                        <ListItemText sx={{ fontSize: '18px' }}>{comment.detail}</ListItemText>
                      </ListItem>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ marginTop: '3em' }}>
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      marginLeft: 85
                    }}
                  ></Box>
                  <Box
                    sx={{
                      alignItems: 'left'
                    }}
                  >
                    {openList ? (
                      <>
                        <Typography component="h2" variant="h5">
                          <a id="commentform">CommentForm</a>
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                          <Typography component="h2" variant="h6">
                            name
                          </Typography>
                          <TextareaAutosize
                            style={{
                              resize: 'none',
                              width: 800,
                              height: 50
                            }}
                            required
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Text"
                          />
                          <Typography component="h2" variant="h6">
                            comment
                          </Typography>
                          <TextareaAutosize
                            style={{
                              resize: 'none',
                              width: 800,
                              height: 100
                            }}
                            required
                            name="detail"
                            id="detail"
                            autoComplete="detail"
                            placeholder="Text"
                          />
                          <br />
                          <Box
                            sx={{
                              marginLeft: 75
                            }}
                          >
                            <Button
                              type="submit"
                              name="create"
                              variant="contained"
                              sx={{
                                mt: 3,
                                mb: 2,
                                background: '#26855A',
                                '&:hover': {
                                  background: '#2bb32b',
                                  opacity: [0.9, 0.8, 0.7]
                                },
                                borderRadius: 25
                              }}
                            >
                              CREATE
                            </Button>
                          </Box>
                        </Box>
                      </>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </>
    )
  } else {
    return <CircularProgress />
  }
}

export default Detail
