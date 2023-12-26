import { clsx } from 'clsx'

import type { ColSpan, SMColSpan, MDColSpan, XLColSpan, LGColSpan } from '@/lib/tailwind/flexbox_gird'
import { colSpan, smColSpan, mdColSpan, xlColSpan, lgColSpan } from '@/lib/tailwind/flexbox_gird'

type GridItemProps = {
  xs: ColSpan,
  sm?: SMColSpan,
  md?: MDColSpan,
  lg?: LGColSpan
  xl?: XLColSpan,
  children: React.ReactNode
}

export function GridItem(props: GridItemProps) {
  return (
    <div 
      className={ 
        clsx(
          colSpan[props.xs],
          props.sm && smColSpan[props.sm], 
          props.md && mdColSpan[props.md],
          props.lg && lgColSpan[props.lg],
          props.xl && xlColSpan[props.xl]
        ) 
      }
    >
      { props.children }
    </div>
  )
}

export type GridItem = typeof GridItem