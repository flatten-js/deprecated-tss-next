export type TailwindClass<
  T extends string | number,
  U extends string
> = { 
  [k in T]: `${U}${T}` 
}




