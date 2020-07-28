import React from 'react'
import { ColorProp } from '../../themes/wrapper/types'
import { Anchor, StyledLink, StyledButton } from './style'

export type ButtonProps = {
  backgroundColor: ColorProp
  borderRadius: string
  border: string
  children: any
  color: ColorProp
  disabled?: boolean
  fontSize: string
  fontWeight: string
  grow?: number
  height?: string
  href?: string
  hoverBackgroundColor: ColorProp
  hoverColor: ColorProp
  margin?: string
  maxWidth?: string
  padding: string
  shadow: string
  to?: string
  width: string
}

const Button = (props: ButtonProps) => {
  const { to, href } = props
  if (to) return <StyledLink {...props} to={to} />
  if (href) return <Anchor {...props} href={href} />
  return <StyledButton {...props} />
}

Button.defaultProps = {
  backgroundColor: { type: 'primary', position: 0 },
  borderRadius: '30px',
  border: 'none',
  color: { type: 'grayscale', position: 4 },
  fontSize: 'small',
  fontWeight: 'medium',
  hoverBackgroundColor: { type: 'primary', position: 0 },
  hoverColor: { type: 'grayscale', position: 4 },
  padding: '.6em 1.2em',
  shadow: 'extraSmall',
  width: 'auto',
}

export default Button
