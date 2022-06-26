import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Container, FormLabel, OutlinedInput, Typography, Box, Stack, styled, Input } from '@mui/material'
import { CircularProgress } from '@mui/material'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import useSnackbar from '../hooks/useSnackbar'
import { parseTimestampToDate } from '../utils/DataFormat'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Todo } from '../types/todo'

// firestore root directory
const rootDir = 'todos'

const EditTodo = () => {
  const [todo, setTodo] = useState<Todo | null>(null)
  const { setMessage, AlertSnackbar } = useSnackbar()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    // データ取得
    if (id !== undefined) {
      ;(async () => {
        const docSnap = await getDoc(doc(db, rootDir, id as string))
        docSnap.exists() && setTodo({ ...(docSnap.data() as Todo) })
      })()
    }
  }, [id])

  // データ更新
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // TITLEが0文字の場合のエラー
    if (todo === null || todo.title.length === 0) {
      setMessage('TITLEが入力されていません。')
      return
    }

    // DETAILが0文字の場合のエラー
    if (todo === null || todo.detail.length === 0) {
      setMessage('DETAILが入力されていません。')
      return
    }

    if (id !== undefined && todo != null) {
      ;(async () => {
        await updateDoc(doc(db, rootDir, id as string), {
          title: todo.title,
          detail: todo.detail,
          update: serverTimestamp(),
          editor: 'userUID'
        })
      })().then(() => {
        // Todoリストへ戻る
        router.push('/')
      })
    }
  }

  if (todo != null) {
    return (
      <Container component="div">
        <Stack spacing={2} my={3}>
          <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h2" fontSize="24px" fontWeight={600} alignSelf="center">
              EDIT TODO
            </Typography>
            <SButton
              sx={{
                backgroundColor: '#9ae6b4',
                color: '#000',
                '&:hover': { backgroundColor: '#9ae6b4' }
              }}
              onClick={() => router.back()}
            >
              Back
            </SButton>
          </Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormLabel sx={{ fontWeight: 600, fontSize: '20px' }}>
                <div>TITLE</div>
                <OutlinedInput
                  id="title"
                  name="title"
                  fullWidth
                  value={todo.title}
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                  sx={{ fontWeight: 600, borderRadius: '10px' }}
                />
              </FormLabel>
              <FormLabel sx={{ fontWeight: 600, fontSize: '20px' }}>
                <div>DETAIL</div>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                  <Box sx={{ flex: 1, margin: '0 10px' }}>
                    <Typography>Context</Typography>
                    <Input
                      id="detail"
                      name="detail"
                      fullWidth
                      value={todo.detail}
                      disableUnderline
                      multiline
                      onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
                      sx={{
                        height: '300px',
                        alignItems: 'start',
                        fontWeight: 600,
                        overflow: 'scroll',
                        border: 'solid 1px #f5f5f5',
                        borderRadius: '10px'
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1, margin: '0 10px' }}>
                    <Typography>Preview</Typography>
                    <Box height="300px" overflow="scroll" border="solid 1px #f5f5f5" borderRadius="10px">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-body line-break">
                        {todo.detail}
                      </ReactMarkdown>
                    </Box>
                  </Box>
                </Box>
              </FormLabel>
              <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box display="flex">
                  <Box mr={2}>
                    <Typography>Create</Typography>
                    <p style={{ margin: '0 0 0 10px', fontWeight: 600 }}>{parseTimestampToDate(todo.create, '-')}</p>
                  </Box>
                  <Box>
                    <Typography>Update</Typography>
                    <p style={{ margin: '0 0 0 10px', fontWeight: 600 }}>{parseTimestampToDate(todo.update, '-')}</p>
                  </Box>
                </Box>
                <SButton
                  type="submit"
                  sx={{
                    bgcolor: '#38a169',
                    color: '#fff',
                    '&:hover': { bgcolor: '#38a169' }
                  }}
                >
                  UPDATE
                </SButton>
              </Box>
            </Stack>
          </form>
        </Stack>
        <AlertSnackbar />
      </Container>
    )
  } else {
    return <CircularProgress />
  }
}

// Button 共通スタイル
const SButton = styled('button')({
  height: '40px',
  width: '112px',
  borderRadius: '100px',
  border: '1px solid #000',
  fontWeight: 600,
  '&:hover': {
    opacity: 0.7
  }
})

export default EditTodo
