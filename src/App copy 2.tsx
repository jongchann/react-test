import TextField from './components/TextField'
import { useState } from 'react'
import Button from './components/Button'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function logIn(): void {
    console.log(email, password)
  }

  return (
    <>
      <TextField
        label="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        deleteValue={() => setEmail('')}></TextField>
      <TextField
        type="password"
        placeholder="비밀번호를 입력해주세요"
        label="password"
        value={password}
        onKeyDown={e => {
          if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            console.log(e.currentTarget.value)
          }
        }}
        onChange={e => setPassword(e.target.value)}
        hint="대소문자 하나이상 포함"></TextField>
      <Button onClick={logIn}>
        <span style={{ color: 'blue' }}>로그인</span>
      </Button>
    </>
  )
}
