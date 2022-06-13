import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
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
  Typography
} from '@mui/material'
import { styled } from '@mui/system'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Link from 'next/link'
import { db } from '../firebaseConfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { parseTimestampToDate } from '../utils/DataFormat'

const Home: NextPage = () => {
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

  const q = query(collection(db, 'todos'), orderBy('create'))
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
          update: parseTimestampToDate(todo.data().update, '-'),
          isDraft: todo.data().isDraft
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

  const todoStatus = (status: string) => {
    switch (status) {
      case 'NOT STARTED':
        return <NotStartedComponent>{status}</NotStartedComponent>
      case 'DOING':
        return <DoingComponent>{status}</DoingComponent>
      case 'DONE':
        return <DoneComponent>{status}</DoneComponent>
    }
  }

  const keywordChange = (event: SelectChangeEvent) => {
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
                onChange={keywordChange}
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
              <RestoreFromTrashOutlinedIcon sx={icon} />
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
                <TableCell sx={{ fontSize: '24px', fontWeight: 'bold' }}>Task</TableCell>
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
                  todo.isDraft === false &&
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
                      <TableCell align="right">{todoStatus(todo.status)}</TableCell>
                      <TableCell align="right">
                        <FormControl fullWidth>
                          <Select
                            value={todo.priority}
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
                      <TableCell align="right">
                        <Link href={`editTodo?id=${todo.id}`}>
                          <EditOutlinedIcon
                            sx={{
                              borderRadius: '8px',
                              marginRight: '10px',
                              '&:hover': {
                                background: 'gray',
                                color: 'white'
                              }
                            }}
                          />
                        </Link>
                        <DeleteOutlineOutlinedIcon
                          sx={{
                            borderRadius: '8px',
                            '&:hover': {
                              background: 'gray',
                              color: 'white'
                            }
                          }}
                        />
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

const NotStartedComponent = styled('div')({
  boxSizing: 'border-box',
  background: '#F0FFF4',
  border: '1px solid rgba(0, 0, 0, 0.8)',
  borderRadius: '50px',
  color: 'black',
  fontSize: '12px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '14px 0px'
})

const DoingComponent = styled('div')({
  boxSizing: 'border-box',
  background: '#25855A',
  border: '1px solid rgba(0, 0, 0, 0.8)',
  borderRadius: '50px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '10px'
})

const DoneComponent = styled('div')({
  boxSizing: 'border-box',
  background: '#68D391',
  border: '1px solid rgba(0, 0, 0, 0.8)',
  borderRadius: '50px',
  color: 'black',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '10px'
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
