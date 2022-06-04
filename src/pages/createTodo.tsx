import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { TextareaAutosize } from '@material-ui/core'
import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
  Typography
} from '@mui/material'
import { addDoc, collection, doc, getDocs, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'

import { db } from '../firebaseConfig'

export default function CreateTodo() {
  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (data.get('title') === '') {
      setOpen(true)
      return
    }
    const colRef = collection(db, 'todos')
    const buttonName = event.currentTarget.submitter.name
    // const buttonName = event.nativeEvent.submitter.name;
    const checkDraft = buttonName === 'draft' ? true : false

    const firestoreSubmit = async () => {
      await addDoc(colRef, {
        id: 'yet',
        title: data.get('title'),
        detail: data.get('detail'),
        status: 'NOT STARTED',
        priority: data.get('priority'),
        create: serverTimestamp(),
        update: serverTimestamp(),
        isDraft: checkDraft,
        author: 'userUID',
        editor: 'userUID'
      })
      const q = await query(collection(db, 'todos'), where('id', '==', 'yet'))
      const querySnapshot = await getDocs(q)
      let docId = ''
      querySnapshot.forEach((doc) => {
        docId = doc.id
      })
      const updateRef = doc(db, 'todos', docId)
      updateDoc(updateRef, {
        id: docId
      })
      router.push('/')
    }

    firestoreSubmit()
  }
  const [open, setOpen] = useState(false)

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="error">
          TITLEが入力されていません。
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
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
          >
            <Link href="/">
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: '#68D391',
                  '&:hover': {
                    background: '#68D391',
                    opacity: [0.9, 0.8, 0.7]
                  },
                  borderRadius: 25
                }}
              >
                Back
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              alignItems: 'left'
            }}
          >
            <Typography component="h1" variant="h4">
              NEW TODO
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography component="h2" variant="h6">
              TITLE
            </Typography>
            <TextareaAutosize
              style={{
                resize: 'none',
                width: 800,
                height: 50
              }}
              required
              name="title"
              id="title"
              autoComplete="title"
              placeholder="Text"
            />
            <Typography component="h2" variant="h6">
              DETAIL
            </Typography>
            <TextareaAutosize
              style={{
                resize: 'none',
                width: 800,
                height: 200
              }}
              required
              name="detail"
              id="detail"
              autoComplete="detail"
              placeholder="Text"
            />
            <br />
            <FormControl>
              <FormLabel id="priority">PRIORITY</FormLabel>
              <RadioGroup row aria-labelledby="priority" defaultValue="priority" name="priority">
                <FormControlLabel value="high" control={<Radio />} label="High" />
                <FormControlLabel value="middle" control={<Radio />} label="Middle" />
                <FormControlLabel value="low" control={<Radio />} label="Low" />
              </RadioGroup>
            </FormControl>
            <Box
              sx={{
                marginLeft: 75
              }}
            >
              <Button
                type="submit"
                name="draft"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: '#333333',
                  background: '#fce2ea',
                  '&:hover': {
                    background: '#ffefd5',
                    opacity: [0.9, 0.8, 0.7]
                  },
                  borderRadius: 25,
                  marginRight: 2
                }}
              >
                DRAFT
              </Button>
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
        </Box>
      </Container>
    </>
  )
}
