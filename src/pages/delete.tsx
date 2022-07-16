import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination
} from '@mui/material'
import Container from '@mui/material/Container'
import { collection, onSnapshot, orderBy, query, Timestamp, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { parseTimestampToDate } from '../utils/DataFormat'
import useFirebase from '../hooks/useFirebase'
import useDialog, { ConfirmDialogType } from '../hooks/useDialog'
import { Todo } from '../types/todo'
import { useRecoilValue } from 'recoil'
import { isLoginState, uidState } from '../atoms'

const Delete: NextPage = () => {
  const router = useRouter()
  const isLogin = useRecoilValue(isLoginState)
  const loginUid = useRecoilValue(uidState)

  useEffect(() => {
    if (isLogin === false) {
      router.push('/welcome')
    }
  }, [isLogin])

  const [dialog, setDialog] = useState<keyof ConfirmDialogType | null>(null)
  const [todos, setTodos] = useState<Array<Todo> | null>(null)
  const { deleteData, restoreData } = useFirebase()
  const { ConfirmDialog } = useDialog()

  useEffect(() => {
    const q = query(collection(db, 'todos'), where('isTrash', '==', true), orderBy('create'))

    const unsub = onSnapshot(q, (querySnapshot) => {
      const todos = querySnapshot.docs.map((todo) => ({
        id: todo.data().id,
        title: todo.data().title,
        detail: todo.data().detail,
        status: todo.data().status,
        priority: todo.data().priority,
        create: todo.data().create,
        update: todo.data().update,
        isDraft: todo.data().isDraft,
        isTrash: todo.data().isTrash,
        author: todo.data().author,
        editor: todo.data().editor
      }))

      setTodos(todos)
    })

    return () => unsub()
  }, [])

  // 単一削除
  const deleteTodo = (id: string) => {
    deleteData(Array.of(id))
  }

  // 単一リストア
  const restoreTodo = (id: string) => {
    restoreData(Array.of(id))
  }

  // 複数削除
  const deleteAllTodo = () => {
    if (todos === null) return

    const deleteTodoId = todos.map((todo) => todo.id)
    deleteData(deleteTodoId)
      .then(() => setDialog(null))
      .catch((error) => alert(error))
  }

  // 複数リストア
  const restoreAllTodo = () => {
    if (todos === null) return

    const restoreTodoId = todos.map((todo) => todo.id)
    restoreData(restoreTodoId)
      .then(() => setDialog(null))
      .catch((error) => alert(error))
  }

  // 確認ダイアログOKボタン押下時
  const onClickConfirmDialogOKBtn = () => {
    switch (dialog) {
      case 'delete':
        deleteAllTodo()
        return
      case 'restore':
        restoreAllTodo()
        return
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Typography component="h1" variant="h4" mt={3} mb={2} sx={{ fontWeight: 'bold' }}>
            TRASH
          </Typography>
          <Box sx={{ textAlign: 'right', marginLeft: 'auto' }}>
            <Button
              variant="contained"
              sx={{
                pl: 4,
                pr: 4,
                mt: 3,
                mb: 2,
                mr: 2,
                background: '#ec7272',
                '&:hover': { background: '#ec7171', opacity: [0.9, 0.8, 0.7] },
                borderRadius: 25,
                borderColor: 'text.primary',
                fontWeight: 'bold',
                fontSize: 18
              }}
              onClick={() => setDialog('delete')}
            >
              Delete All
            </Button>
            <Button
              variant="contained"
              sx={{
                pl: 4,
                pr: 4,
                mt: 3,
                mb: 2,
                mr: 2,
                background: '#62b1ea',
                '&:hover': { background: '#62bcca', opacity: [0.9, 0.8, 0.7] },
                borderRadius: 25,
                borderColor: 'text.primary',
                fontWeight: 'bold',
                fontSize: 18
              }}
              onClick={() => setDialog('restore')}
            >
              Restore ALL
            </Button>
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
              onClick={() => router.back()}
            >
              Back
            </Button>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', flexFlow: 'column', overflowX: 'auto' }}>
            <Box sx={{ p: 2 }}>
              <TableContainer>
                <Table sx={{ minWidth: 850 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontSize: '24px', fontWeight: 'bold', background: '#68D391', paddingRight: 20 }}>
                        Task
                      </TableCell>
                      <TableCell sx={{ fontSize: '24px', fontWeight: 'bold', background: '#68D391' }}>Status</TableCell>
                      <TableCell sx={{ fontSize: '24px', fontWeight: 'bold', background: '#68D391' }}>
                        Priority
                      </TableCell>
                      <TableCell sx={{ fontSize: '24px', fontWeight: 'bold', background: '#68D391' }}>Create</TableCell>
                      <TableCell sx={{ fontSize: '24px', fontWeight: 'bold', background: '#68D391' }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todos !== null &&
                      todos.map((todo) => {
                        if (todo.author === loginUid) {
                          return (
                            <TableRow key={todo.id}>
                              <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                {todo.title}
                              </TableCell>
                              <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <Button
                                  variant="contained"
                                  sx={{
                                    background: '#f0fff4',
                                    '&:hover': { background: '#fff', opacity: [0.9, 0.8, 0.7] },
                                    borderRadius: 25,
                                    border: 1,
                                    borderColor: 'text.primary',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontSize: 8
                                  }}
                                >
                                  NOT STARTED
                                </Button>
                              </TableCell>
                              <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <Typography
                                  component="p"
                                  variant="h6"
                                  mb={2}
                                  sx={{ fontWeight: 'bold', color: '#9a5656' }}
                                >
                                  {todo.priority}
                                </Typography>
                              </TableCell>
                              <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <Typography component="p" variant="h6" mb={2} sx={{ fontWeight: 'bold' }}>
                                  {parseTimestampToDate(todo.create, '-')}
                                </Typography>
                              </TableCell>
                              <TableCell component="th" scope="row" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <Button
                                  variant="contained"
                                  sx={{
                                    mr: 1,
                                    background: '#ec7272',
                                    '&:hover': { background: '#ec7171', opacity: [0.9, 0.8, 0.7] },
                                    borderRadius: 25,
                                    borderColor: 'text.primary',
                                    fontWeight: 'bold',
                                    fontSize: 11
                                  }}
                                  onClick={() => deleteTodo(todo.id)}
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{
                                    mr: 1,
                                    background: '#62b1ea',
                                    '&:hover': { background: '#62bcca', opacity: [0.9, 0.8, 0.7] },
                                    borderRadius: 25,
                                    borderColor: 'text.primary',
                                    fontWeight: 'bold',
                                    fontSize: 11
                                  }}
                                  onClick={() => restoreTodo(todo.id)}
                                >
                                  Restore
                                </Button>
                              </TableCell>
                            </TableRow>
                          )
                        }
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box mt={6} mb={3} sx={{ textAlign: 'center' }}>
                <Pagination
                  count={10}
                  size="large"
                  variant="outlined"
                  shape="rounded"
                  sx={{ display: 'inline-block' }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <ConfirmDialog dialog={dialog} setOpen={setDialog} onClickOK={() => onClickConfirmDialogOKBtn()} />
    </>
  )
}

export default Delete
