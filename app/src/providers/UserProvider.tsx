'use client'

import { createContext, useContext } from "react" 
import { Session } from "next-auth"

export const UserContext = createContext<Session['user']>({})

export function useUser() {
  return useContext(UserContext)
}

type UserProviderProps = {
  user: Session['user']
  children: React.ReactNode
}

export function UserProvider(props: UserProviderProps) {
  return (
    <UserContext.Provider value={ props.user }>
      { props.children }
    </UserContext.Provider>
  )
}