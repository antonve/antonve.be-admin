import type { NextPage } from 'next'
import { Label, TextInput } from '@app/components/Form'

const Login: NextPage = () => {
  return (
    <div className="">
      <form>
        <div className="mb-2">
          <Label htmlFor="password">Password</Label>
          <TextInput id="password" value={''} onChange={() => {}} />
        </div>
      </form>
    </div>
  )
}

export default Login
