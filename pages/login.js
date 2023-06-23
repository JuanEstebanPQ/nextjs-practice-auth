import { signIn, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'


function LoginPage() {

const {data: session, status} = useSession()
const router = useRouter()


if(status !== 'loading' && status === 'authenticated'){
    router.push('/')
}

  return (
    <button onClick={() => signIn('github')}>
        Signin with Github
    </button>
  )
}

export default LoginPage