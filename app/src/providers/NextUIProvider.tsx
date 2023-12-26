'use client'

import { useRouter } from "next/navigation"
import { NextUIProvider as _NextUIProvider } from "@nextui-org/react"

type NextUIProviderProps = {
  children: React.ReactNode
}

export function NextUIProvider(props: NextUIProviderProps) {
  const router = useRouter()
  
  return (
    <_NextUIProvider navigate={ router.push }>
      { props.children }
    </_NextUIProvider>
  )
}