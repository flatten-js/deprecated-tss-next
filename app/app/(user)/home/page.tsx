import { Grid } from '@/src/components/Grid'
import { GridItem } from '@/src/components/GridItem'

export default async function HomePage() {
  return (
    <Grid cols={12} gap={4}>
      <GridItem xs={12} sm={6} md={6} lg={4} xl={3}>
        <div>Home</div>
      </GridItem>
    </Grid>
  )
}