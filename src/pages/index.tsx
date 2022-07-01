import { ChangeEvent, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

import {
  Box,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
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
  Typography
} from '@mui/material'
import { styled } from '@mui/system'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { db } from '../firebaseConfig'
import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { parseTimestampToDate } from '../utils/DataFormat'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  // ログインしていない場合はwelcomeページに飛ばす
  const router = useRouter()
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('uid ' + user.uid + ' がログインしています')
    } else {
      // welcomeページがまだないため、サインアップに飛ばす
      router.push('/signUp')
    }
  })

  const [todos, setTodos] = useState([
    {
      id: '',
      title: '',
      status: '',
      priority: '',
      create: '',
      update: '',
      isDraft: false
    }
  ])

  const [sort, setSort] = useState('')
  // ソートはデフォルトが昇順になっている
  const q = query(
    collection(db, 'todos'),
    where('isDraft', '==', false),
    where('isTrash', '==', false),
    orderBy('create')
  )
  const [keyword, setKeyword] = useState('')

  const [filteredRows, setFilteredRows] = useState(todos)
  useEffect(() => {
    const unSub = onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((todo) => ({
          id: todo.data().id,
          title: todo.data().title,
          status: todo.data().status,
          priority: todo.data().priority,
          create: parseTimestampToDate(todo.data().create, '-'),
          update: todo.data().update ? parseTimestampToDate(todo.data().update, '-') : '更新中',
          isDraft: todo.data().isDraft,
          isTrash: todo.data().isTrash
        }))
      )
    })
    return () => unSub()
  }, [])

  const [filteringStatus, setFilteringStatus] = useState('NONE')
  const [filteringPriority, setFilteringPriority] = useState('None')

  const filteringStatusChange = (event: SelectChangeEvent) => {
    setFilteringStatus(event.target.value as string)
  }
  const filteringPriorityChange = (event: SelectChangeEvent) => {
    setFilteringPriority(event.target.value as string)
  }
  const resetClick = () => {
    setFilteringStatus('NONE')
    setFilteringPriority('None')
    setKeyword('')
  }

  const trashTodo = (id: string) => {
    ;(async () => {
      await updateDoc(doc(db, 'todos', id), {
        isTrash: true
      })
    })()
  }

  const keywordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setKeyword(event.target.value as string)
  }

  useEffect(() => {
    if (keyword === '') {
      setFilteredRows(todos)
      return
    }

    const searchKeywords = keyword
      .trim()
      .toLowerCase()
      .match(/[^\s]+/g)

    if (searchKeywords === null) {
      setFilteredRows(todos)
      return
    }

    const result = todos.filter((todos) =>
      searchKeywords.every((keyword) => todos.title.toLowerCase().indexOf(keyword) !== -1)
    )
    setFilteredRows(result)
  }, [keyword, todos])

  const changeStatus = (e: SelectChangeEvent, id: string) => {
    const status = e.target.value
    updateDoc(doc(db, 'todos', id), {
      status: status,
      update: serverTimestamp()
    })
  }

  const changePriority = (e: SelectChangeEvent, id: string) => {
    const priority = e.target.value
    updateDoc(doc(db, 'todos', id), {
      priority: priority,
      update: serverTimestamp()
    })
  }
  const changeSort = (e: SelectChangeEvent) => {
    setSort(e.target.value)

    if (e.target.value === 'asc') {
      setFilteredRows(filteredRows.sort((a, b) => new Date(a.create).getTime() - new Date(b.create).getTime()))
    } else {
      setFilteredRows(filteredRows.sort((a, b) => new Date(b.create).getTime() - new Date(a.create).getTime()))
    }
  }

  return (
    <>
      <Container
        component="main"
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        }}
      >
        <CssBaseline />
        <Typography component="h1" variant="h4" mt={3} mb={2} sx={{ fontWeight: 'bold' }}>
          TODO LIST
        </Typography>
        <Box mb={3} sx={{ display: 'flex', overflowX: 'auto' }}>
          <Box mr={3} sx={{ width: '190px' }}>
            <Typography variant="h6">SEARCH</Typography>
            <Paper
              component="form"
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid black',
                borderRadius: '10px',
                boxShadow: 'none',
                marginTop: '16px',
                marginBottom: '8px'
              }}
            >
              <InputBase
                onChange={(e) => keywordChange(e)}
                sx={{ ml: 1, flex: 1, fontWeight: 'bold' }}
                placeholder="Text"
                inputProps={{ 'aria-label': 'search todo text' }}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Box mr={3} sx={{ width: '190px' }}>
            <Typography variant="h6">STATUS</Typography>
            <FormControl
              fullWidth
              sx={{
                border: '1px solid black',
                borderRadius: '10px',
                marginTop: '16px',
                marginBottom: '8px',
                height: '50px'
              }}
            >
              <Select value={filteringStatus} onChange={filteringStatusChange}>
                <MenuItem value="NONE">- - - - - - -</MenuItem>
                <MenuItem value="NOT STARTED">NOT STARTED</MenuItem>
                <MenuItem value="DOING">DOING</MenuItem>
                <MenuItem value="DONE">DONE</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mr={3} sx={{ width: '190px' }}>
            <Typography variant="h6">PRIORITY</Typography>
            <FormControl
              fullWidth
              sx={{
                marginTop: '16px',
                marginBottom: '8px',
                border: '1px solid black',
                borderRadius: '10px',
                height: '50px'
              }}
            >
              <Select value={filteringPriority} onChange={filteringPriorityChange}>
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
              width: '190px',
              display: 'flex',
              alignItems: 'flex-end',
              marginBottom: '8px'
            }}
          >
            <ResetBtn onClick={resetClick}>RESET</ResetBtn>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box
              mr={2}
              sx={{
                background: '#F6E05E',
                border: '8px solid #F6E05E',
                borderRadius: '30px',
                height: '50px',
                width: '50px',
                '&:hover': {
                  background: '#ccb94e',
                  borderColor: '#ccb94e',
                  color: 'white'
                }
              }}
            >
              <Link href="/delete">
                <RestoreFromTrashOutlinedIcon sx={icon} />
              </Link>
            </Box>
            <Box
              mr={2}
              sx={{
                background: '#FED7E2',
                border: '8px solid #FED7E2',
                borderRadius: '30px',
                height: '50px',
                width: '50px',
                '&:hover': {
                  background: '#d4b2bb',
                  borderColor: '#d4b2bb',
                  color: 'white'
                }
              }}
            >
              <SaveAsIcon sx={icon} />
            </Box>
            <Box
              sx={{
                background: '#68D391',
                border: '8px solid #68D391',
                borderRadius: '30px',
                height: '50px',
                width: '50px',
                '&:hover': {
                  background: '#55ab76',
                  borderColor: '#55ab76',
                  color: 'white'
                }
              }}
            >
              <Link href="/createTodo">
                <OpenInNewIcon sx={icon} />
              </Link>
            </Box>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ background: '#68D391' }}>
                <TableCell sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                      Task
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sort}
                      label="Age"
                      onChange={(e: SelectChangeEvent) => changeSort(e)}
                      sx={{ fontSize: '20px', fontWeight: 'bold' }}
                    >
                      <MenuItem value="asc">昇順</MenuItem>
                      <MenuItem value="desc">降順</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  Priority
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  Create
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  Update
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((todo: any) => {
                if (
                  (filteringStatus === todo.status || filteringStatus === 'NONE') &&
                  (filteringPriority === todo.priority || filteringPriority === 'None')
                ) {
                  return (
                    <TableRow
                      key={todo.id}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0
                        }
                      }}
                    >
                      <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                        <Link href={`/todo/${todo.id}`}>
                          <a>{todo.title}</a>
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <FormControl fullWidth>
                          <Select
                            value={todo.status ?? ''}
                            onChange={(e: SelectChangeEvent) => changeStatus(e, todo.id)}
                            sx={{
                              border: '2px solid #EC7272',
                              borderRadius: '15px',
                              textAlign: 'left',
                              height: '50px'
                            }}
                          >
                            <MenuItem value="NOT STARTED">NOT STARTED</MenuItem>
                            <MenuItem value="DOING">DOING</MenuItem>
                            <MenuItem value="DONE">DONE</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell align="right">
                        <FormControl fullWidth>
                          <Select
                            value={todo.priority ?? ''}
                            onChange={(e: SelectChangeEvent) => changePriority(e, todo.id)}
                            sx={{
                              border: '2px solid #EC7272',
                              borderRadius: '15px',
                              textAlign: 'left',
                              height: '50px'
                            }}
                          >
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Middle">Middle</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                        {todo.create}
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                        {todo.update}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          href={`editTodo?id=${todo.id}`}
                          sx={{
                            '&:hover': {
                              background: 'gray',
                              color: 'white'
                            }
                          }}
                        >
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: 'gray',
                              color: 'white'
                            }
                          }}
                          onClick={() => trashTodo(todo.id)}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={6} mb={3} sx={{ textAlign: 'center' }}>
          <Pagination count={10} size="large" variant="outlined" shape="rounded" sx={{ display: 'inline-block' }} />
        </Box>
      </Container>
    </>
  )
}

const ResetBtn = styled('button')({
  background: '#B5B5B5',
  border: '1px solid black',
  borderRadius: '50px',
  color: 'black',
  fontSize: '20px',
  fontWeight: 'bold',
  height: '50px',
  padding: '10px 20px',
  verticalAlign: 'bottom',
  '&:hover': {
    background: '#858585',
    color: 'white'
  }
})

const icon = {
  positon: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  margin: 'auto',
  width: '100%',
  height: '100%'
}

export default Home
