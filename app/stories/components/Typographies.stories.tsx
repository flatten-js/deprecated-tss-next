import type { Meta, StoryObj } from '@storybook/react'

import { Typographies } from '@/src/components/Typographies'

const meta: Meta<Typographies> = {
  component: Typographies,
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
            <h1>Heading</h1>
            <p>Paragraph</p>
            <blockquote>Blockquote</blockquote>
          </>
        )
      }
    }
  }
}

export default meta

type Story = StoryObj<Typographies>
export const Default: Story = {}