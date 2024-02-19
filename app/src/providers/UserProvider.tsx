'use client'

import { Session } from "next-auth"

import { UserContext } from "@/src/hooks/useUser"

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