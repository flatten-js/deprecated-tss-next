import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/src/components/Header'

const meta: Meta<Header> = {
  component: Header
}

export default meta

type Story = StoryObj<Header>
export const Default: Story = {}