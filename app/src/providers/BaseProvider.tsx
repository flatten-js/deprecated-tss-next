'use client'

import { SessionProvider } from "next-auth/react"

import { NextUIProvider } from "./NextUIProvider"


type BaseProviderProps = {
  children: React.ReactNode
}

export function BaseProvider(props: BaseProviderProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        { props.children }
      </NextUIProvider>
    </SessionProvider>
  )
}



