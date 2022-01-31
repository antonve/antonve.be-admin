import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Router from 'next/router'
import { Label, TextInput } from '@app/components/Form'
import Button from '@app/components/Button'
import { storeAuthToken } from '@app/hooks/withAuth'

const Login: NextPage = () => {
  const [password, setPassword] = useState('')
  const saveToken = (e: FormEvent) => {
    e.preventDefault()
    if (password == "") {
      return
    }

    storeAuthToken(password)
    Router.push('/')
  }

  return (
    <div className="">
      <form onSubmit={saveToken}>
        <div className="mb-2">
          <Label htmlFor="password">Password</Label>
          <TextInput id="password" value={password} onChange={setPassword} />
        </div>
        <div className="flex justify-end gap-x-4">
            <Button type="submit" primary>
              Log in
            </Button>
          </div>
      </form>
    </div>
  )
}

export default Login
