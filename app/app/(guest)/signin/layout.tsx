import { HeroLayout } from '@/src/layouts/HeroLayout'


type GuestSigninLayoutProps = {
  children: React.ReactNode
}

export default async function GuestSigninLayout(props: GuestSigninLayoutProps) {
  return (
    <HeroLayout>
      { props.children }
    </HeroLayout>
  )
}