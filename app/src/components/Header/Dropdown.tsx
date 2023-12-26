'use client'

import { signOut } from 'next-auth/react' 
import { 
  Dropdown as _Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'

import { Avatar } from '@/src/components/Avatar'
import { useUser } from '@/src/providers/UserProvider'

export default function Dropdown() {
  const user = useUser()

  return (
    <_Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Avatar identity={ user?.name! } />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions">
        <DropdownItem textValue='Signed in as developer@example.com'>
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{ user?.name }</p>
        </DropdownItem>
        <DropdownItem 
          className='text-danger'
          color='danger' 
          onClick={ () => signOut({ callbackUrl: '/signin' }) }
        >
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </_Dropdown>
  )
}