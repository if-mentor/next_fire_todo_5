import { FirebaseError } from '@firebase/util'
import { sendPasswordResetEmail, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { auth } from '../firebaseConfig'

export const usePasswordReset = () => {
  const router = useRouter()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  function passwordReset(email: string) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log(email)
        setSuccess(true)
        router.push('/login')
      })
      .catch((err) => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return { success, error, passwordReset }
}
