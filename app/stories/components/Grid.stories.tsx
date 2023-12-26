import type { Meta, StoryObj } from '@storybook/react'

import { Grid } from '@/src/components/Grid'
import { GridItem } from '@/src/components/GridItem'

const meta: Meta<Grid> = {
  component: Grid,
  argTypes: {
    children: {
      control: {
        type: 'select'
      },
      options: ['none', 'children'],
      mapping: {
        none: [],
        children: (
          <>
            <GridItem xs={12}>
              12
            </GridItem>
            <GridItem xs={12} md={6}>
              md:6
            </GridItem>
            <GridItem xs={12} md={6}>
              md:6
            </GridItem>
          </>
        ) 
      }
    }
  }
}

export default meta

type Story = StoryObj<Grid>
export const Default: Story = {}