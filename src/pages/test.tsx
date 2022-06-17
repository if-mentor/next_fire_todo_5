import React from 'react'
import { useState } from 'react'
import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

const Test = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email, password)
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const { email, password } = event.target.elements
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log('user created')
        console.log(userCredential)
      })
      .catch((error) => {
        alert(error.message)
        console.error(error)
      })
    console.log(email.value)
    console.log(password.value)
  }
  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value)
  }
  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value)
  }
  const handleSignOut = (event: any) => {
    signOut(auth).then(() => {
      router.push('/login')
      alert('サインアウトしました')
    }).catch((error) => {
      alert('エラーが発生しました')
    });
  }

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" onChange={(event) => handleChangeEmail(event)} />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <hr />
        <div>
          <button>登録</button>
        </div>
      </form>
      <button onClick={handleSignOut}>signout</button>
    </div>
  )
}

export default Test
