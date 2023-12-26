'use client'

import { HeroLayout } from "@/src/layouts/HeroLayout"
import { Typographies } from "@/src/components/Typographies"
import { Button } from "@nextui-org/react"

export default function Error() {
  return (
    <HeroLayout>
      <Typographies>
        <h1>Oops!</h1>
        <p>An error occurred which prevented the page from displaying.</p>
        <Button color="primary" onClick={ () => location.reload() }>Retry</Button>
      </Typographies>
    </HeroLayout>
  )
}