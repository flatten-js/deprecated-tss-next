import { 
  Navbar, 
  NavbarContent, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from '@nextui-org/react'

import Dropdown from './Dropdown'

export function Header() {
  return (
    <Navbar>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify='end'>
        <Dropdown />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link color='foreground' href="/home">
            Home
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export type Header = typeof Header