import React from 'react'
import {getSession, useSession, sigOut} from 'next-auth/react'
import {useRouter} from 'next/router'

function Homepage({session}) {

  return (
    <div>
      {
        session ? (
           <div>
              <h1>{session.user.name}</h1>
              <p>{session.user.email}</p>
              <img src={session.user.image}/>
           </div>
        ) :(
          <p>Skeleton</p>
        )
      }
      <button onClick={() => sigOut()}>
        Logout
      </button>

    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if(!session)return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
  return{
    props:{
      session
    }
  }
}

export default Homepage