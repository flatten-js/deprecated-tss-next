import type { Meta, StoryObj } from '@storybook/react'

import { ColumnLayout } from '@/src/layouts/ColumnLayout'
import { Header } from '@/src/components/Header'

const meta: Meta<ColumnLayout> = {
  component: ColumnLayout,
  argTypes: {
    header: {
      control: {
        type: 'select'
      },
      options: ['none', 'header'],
      mapping: {
        none: [],
        header: <Header />
      }
    },
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

type Story = StoryObj<ColumnLayout>
export const Default: Story = {}