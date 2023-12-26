'use client'

import { forwardRef } from 'react'

import { AvatarProps as _AvatarProps, Avatar as _Avatar } from '@nextui-org/avatar'
import BoringAvatar from 'boring-avatars'

type AvatarProps = {
  identity?: string
} & _AvatarProps

function AvatarComponent(props: AvatarProps, ref?: React.Ref<HTMLSpanElement | null>) {
  const { identity, ..._props } = props

  return (
    <_Avatar
      isBordered 
      as="button"
      radius='sm'
      icon={
        <BoringAvatar
          name={ identity }
          variant="beam"
          colors={ ["#FFBD87", "#FFD791", "#F7E8A6", "#D9E8AE", "#BFE3C0"] }
          square
        />
      }
      { ..._props }
      ref={ ref }
    />
  )
}

export const Avatar = forwardRef(AvatarComponent)
export type Avatar = typeof Avatar