import type { Meta, StoryObj } from '@storybook/react'

import { HeroLayout } from '@/src/layouts/HeroLayout'

const meta: Meta<HeroLayout> = {
  component: HeroLayout,
  argTypes: {
    children: {
      control: {
        type: 'select'
      },
      options: ['none', 'children'],
      mapping: {
        none: [],
        children: <div>Hello Storybook</div>
      }
    }
  }
}

export default meta

type Story = StoryObj<HeroLayout>
export const Default: Story = {}