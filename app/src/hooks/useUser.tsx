'use client'

import { createContext, useContext } from "react" 
import { Session } from "next-auth"

export const UserContext = createContext<Session['user']>({})

export function useUser() {
  return useContext(UserContext)
}