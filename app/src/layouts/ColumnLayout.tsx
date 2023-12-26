type ColumnLayoutProps = {
  header: React.ReactNode
  children: React.ReactNode
}

export function ColumnLayout(props: ColumnLayoutProps) {
  return (
    <>
      <header>
        { props.header }
      </header>

      <main className="container mx-auto pt-12 px-6">
        { props.children }
      </main>
    </>
  )
}

export type ColumnLayout = typeof ColumnLayout