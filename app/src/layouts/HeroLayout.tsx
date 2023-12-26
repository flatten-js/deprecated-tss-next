import { clsx } from "clsx"

type HeroLayoutProps = {
  center?: boolean
  full?: boolean
  children: React.ReactNode
}

export function HeroLayout(props: HeroLayoutProps) {
  return (
    <div className="h-screen px-6 flex justify-center items-center">
      <div 
        className={
          clsx(
            "w-full",
            props.full || 'md:w-1/2 lg:w-1/4',
            props.center && 'text-center flex flex-col justify-center items-center'
          )
        }
      >
        { props.children }
      </div>
    </div>
  )
}

export type HeroLayout = typeof HeroLayout