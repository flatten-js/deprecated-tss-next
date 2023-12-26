import { TailwindClass } from "."

export type GridCol = 3 | 4 | 6 | 12
export type GridCols = Extract<GridCol, 12>
export type ColSpan = Extract<GridCol, 12>
export type SMColSpan = Extract<GridCol, 6>
export type MDColSpan = Extract<GridCol, 6>
export type LGColSpan = Extract<GridCol, 4>
export type XLColSpan = Extract<GridCol, 3>
export type Gap = 4

export const gridCols: TailwindClass<GridCols, 'grid-cols-'> = {
  12: 'grid-cols-12'
}

export const colSpan: TailwindClass<ColSpan, 'col-span-'> = {
  12: 'col-span-12'
}

export const smColSpan: TailwindClass<SMColSpan, 'sm:col-span-'> = {
  6: 'sm:col-span-6'
}

export const mdColSpan: TailwindClass<MDColSpan, 'md:col-span-'> = {
  6: 'md:col-span-6'
}

export const lgColSpan: TailwindClass<LGColSpan, 'lg:col-span-'> = {
  4: 'lg:col-span-4'
}

export const xlColSpan: TailwindClass<XLColSpan, 'xl:col-span-'> = {
  3: 'xl:col-span-3'
}

export const gap: TailwindClass<Gap, 'gap-'> = {
  4: 'gap-4'
}

