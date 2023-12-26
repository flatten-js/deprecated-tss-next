import { Button, Link } from "@nextui-org/react"

import { createServerCaller } from "@/server/trpc/context"
import { HeroLayout } from "@/src/layouts/HeroLayout"
import { Typographies } from "@/src/components/Typographies"

export default async function TopPage() {
  const caller = await createServerCaller()
  console.log(await caller.hello())

  return (
    <>
      <HeroLayout full center>
        <Typographies>
          <h1>TSS-Next for type-safe Next.js</h1>
          <Button as={ Link } href="/signin" color="primary">Home</Button>
        </Typographies>
      </HeroLayout>
    </>
  )
}
