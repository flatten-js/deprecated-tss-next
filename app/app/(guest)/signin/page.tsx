import { getProviders } from 'next-auth/react'

import { AuthForm } from '@/src/components/AuthForm'


export default async function LoginPage() {
  const providers = await getProviders()
  
  return (
    <AuthForm providers={providers} />
  )
}