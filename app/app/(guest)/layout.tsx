import { redirect } from 'next/navigation'

import { getServerAuthSession } from '@/server/auth'


type GuestLayoutProps = {
  children: React.ReactNode
}

export default async function GuestLayout(props: GuestLayoutProps) {
  const session = await getServerAuthSession()
  if (session) return redirect('/home')

  return (
    <>
      { props.children }
    </>
  )
}