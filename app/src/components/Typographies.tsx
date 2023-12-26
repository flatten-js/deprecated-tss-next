type TypographiesProps = {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
}

export function Typographies(props: TypographiesProps) {
  const As = props.as || 'div'

  return (
    <As className="prose lg:prose-xl">
      { props.children }
    </As>
  )
}

export type Typographies = typeof Typographies
