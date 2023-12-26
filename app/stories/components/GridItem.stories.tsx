import type { Meta, StoryObj } from '@storybook/react'

import { Grid } from '@/src/components/Grid'
import { GridItem } from '@/src/components/GridItem'

const meta: Meta<GridItem> = {
  component: GridItem,
  argTypes: {
    children: {
      control: {
        type: 'select'
      },
      options: ['none', 'children'],
      mapping: {
        none: [],
        children: (
          <div>GridItem</div>
        )
      }
    }
  },
  decorators: [
    Story => (
      <Grid cols={12} gap={4}>
        <Story />
      </Grid>
    )
  ]
}

export default meta

type Story = StoryObj<GridItem>
export const Default: Story = {}