'use client'

import { signIn, ClientSafeProvider } from 'next-auth/react'
import { LiteralUnion } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers/index'

import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Button
} from '@nextui-org/react'

type AuthFormProps = {
  providers: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider> | null
}

export function AuthForm(props: AuthFormProps) {
  return (
    <Card className='w-full'>
      <CardBody>
        {
          Object.values(props.providers || {}).map(provider => (
            <Button key={ provider.id } color="primary" onClick={ () => signIn(provider.id) }>
              Sign in with { provider.name }
            </Button>
          ))
        }
      </CardBody>
    </Card>
  )
}

export type AuthForm = typeof AuthForm