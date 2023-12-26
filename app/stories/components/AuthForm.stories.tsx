import type { Meta, StoryObj } from '@storybook/react'

import { AuthForm } from '@/src/components/AuthForm'

const meta: Meta<AuthForm> = {
  component: AuthForm,
  argTypes: {
    providers: {
      control: {
        type: 'select'
      },
      options: ['none', 'google'],
      mapping: {
        none: [],
        google: {
          google: {
            id: 'google',
            name: 'Google'
          }
        }
      }
    }
  }
}

export default meta

type Story = StoryObj<AuthForm>
export const Default: Story = {}