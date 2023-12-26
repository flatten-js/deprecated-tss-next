import { redirect } from 'next/navigation'

import { getServerAuthSession } from '@/server/auth'
import { UserProvider } from '@/src/providers/UserProvider'
import { ColumnLayout } from '@/src/layouts/ColumnLayout'
import { Header } from '@/src/components/Header'

type LayoutProps = {
  children: React.ReactNode
}

export default async function Layout(props: LayoutProps) { 
  const session = await getServerAuthSession()
  if (!session?.user) redirect('/signin')

  return (
    <UserProvider user={ session.user }>
      <ColumnLayout
        header={ <Header /> }
      >
        { props.children }
      </ColumnLayout>
    </UserProvider>
  )
}