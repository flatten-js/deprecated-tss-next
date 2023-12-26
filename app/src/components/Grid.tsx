import { clsx } from 'clsx'

import type { GridCols, Gap } from '@/lib/tailwind/flexbox_gird'
import { gridCols, gap } from '@/lib/tailwind/flexbox_gird'

type GridProps = {
  cols: GridCols
  gap: Gap,
  children: React.ReactNode
}

export function Grid(props: GridProps) {
  return (
    <div className={ clsx('grid', gridCols[props.cols], gap[props.gap]) }>
      { props.children }
    </div>
  )
}

export type Grid = typeof Grid