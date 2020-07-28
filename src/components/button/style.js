import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { font, key, palette } from 'styled-theme'
// import { ButtonProps } from './index'

// type LinkButtonProps = ButtonProps & { to: string }

// const styles = css<ButtonProps>`
//   align-items: center;
//   background-color: ${({ backgroundColor: { type, position }, disabled }) => {
//     return disabled ? palette('grayscale', 3) : palette(type, position)
//   }};
//   border: ${({ border }) => border};
//   border-radius: ${({ borderRadius }) => borderRadius};
//   box-sizing: border-box;
//   color: ${({ color: { type, position }, disabled }) => disabled ? palette('grayscale', 2) : palette(type, position)};
//   cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
//   display: inline-flex;
//   font-family: ${font('primary')};
//   font-size: ${({ fontSize }) => key(['sizes', fontSize])};
//   font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
//   justify-content: center;
//   padding: ${({ padding }) => padding};
//   text-decoration: none;
//   transition: background-color .3s ${key(['cubicBezier', 'standard'])}, color .3s ${key(['cubicBezier', 'standard'])};
//   white-space: nowrap;
//   width: ${({ width }) => width};

//   ${({ grow }) => grow && `flex-grow: ${grow};`}
//   ${({ height }) => height && `height: ${height};`}
//   ${({ margin }) => margin && `margin: ${margin};`}
//   ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
//   ${({ shadow }) => css`box-shadow: ${key(['shadows', shadow])};`}

//   &:hover, &:focus, &:active {
//   background-color: ${({ disabled, hoverBackgroundColor: { type, position } }) => {
//     return disabled ? palette('grayscale', 3) : palette(type, position)
//   }};
//   color: ${({ disabled, hoverColor: { type, position } }) => {
//     return disabled ? palette('grayscale', 2) : palette(type, position)
//   }};
//   }

//   &:focus {
//     outline: none;
//   }
// `

export const StyledLink = styled(({
  backgroundColor,
  border,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  hoverBackgroundColor,
  hoverColor,
  margin,
  maxWidth,
  padding,
  shadow,
  width,
  to,
  ...props
// }: LinkButtonProps) => <Link {...props} to={to} />)`
}) => <Link {...props} to={to} />)`
  align-items: center;
  background-color: ${({ backgroundColor: { type, position }, disabled }) => {
    return disabled ? palette('grayscale', 3) : palette(type, position)
  }};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-sizing: border-box;
  color: ${({ color: { type, position }, disabled }) => disabled ? palette('grayscale', 2) : palette(type, position)};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  display: inline-flex;
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => key(['sizes', fontSize])};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  justify-content: center;
  padding: ${({ padding }) => padding};
  text-decoration: none;
  transition: background-color .3s ${key(['cubicBezier', 'standard'])}, color .3s ${key(['cubicBezier', 'standard'])};
  white-space: nowrap;
  width: ${({ width }) => width};

  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ shadow }) => css`box-shadow: ${key(['shadows', shadow])};`}

  &:hover, &:focus, &:active {
  background-color: ${({ disabled, hoverBackgroundColor: { type, position } }) => {
    return disabled ? palette('grayscale', 3) : palette(type, position)
  }};
  color: ${({ disabled, hoverColor: { type, position } }) => {
    return disabled ? palette('grayscale', 2) : palette(type, position)
  }};
  }

  &:focus {
    outline: none;
  }
`

export const Anchor = styled(({
  backgroundColor,
  border,
  borderRadius,
  children,
  color,
  fontSize,
  fontWeight,
  hoverBackgroundColor,
  hoverColor,
  margin,
  maxWidth,
  padding,
  shadow,
  width,
  ...props
// }: ButtonProps) => <a {...props}>{children}</a>)`
}) => <a {...props}>{children}</a>)`
  align-items: center;
  background-color: ${({ backgroundColor: { type, position }, disabled }) => {
    return disabled ? palette('grayscale', 3) : palette(type, position)
  }};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-sizing: border-box;
  color: ${({ color: { type, position }, disabled }) => disabled ? palette('grayscale', 2) : palette(type, position)};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  display: inline-flex;
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => key(['sizes', fontSize])};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  justify-content: center;
  padding: ${({ padding }) => padding};
  text-decoration: none;
  transition: background-color .3s ${key(['cubicBezier', 'standard'])}, color .3s ${key(['cubicBezier', 'standard'])};
  white-space: nowrap;
  width: ${({ width }) => width};

  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ shadow }) => css`box-shadow: ${key(['shadows', shadow])};`}

  &:hover, &:focus, &:active {
  background-color: ${({ disabled, hoverBackgroundColor: { type, position } }) => {
    return disabled ? palette('grayscale', 3) : palette(type, position)
  }};
  color: ${({ disabled, hoverColor: { type, position } }) => {
    return disabled ? palette('grayscale', 2) : palette(type, position)
  }};
  }

  &:focus {
    outline: none;
  }
`

export const StyledButton = styled(({
  backgroundColor,
  border,
  borderRadius,
  children,
  color,
  fontSize,
  fontWeight,
  hoverColor,
  margin,
  maxWidth,
  padding,
  shadow,
  width,
  ...props
// }: ButtonProps) => <button type="button" {...props}>{children}</button>)`
}) => <button type="button" {...props}>{children}</button>)`
  align-items: center;
  background-color: ${({ backgroundColor: { type, position }, disabled }) => {
    return disabled ? palette('grayscale', 3) : palette(type, position)
  }};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-sizing: border-box;
  color: ${({ color: { type, position }, disabled }) => disabled ? palette('grayscale', 2) : palette(type, position)};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  display: inline-flex;
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => key(['sizes', fontSize])};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  justify-content: center;
  padding: ${({ padding }) => padding};
  text-decoration: none;
  transition: background-color .3s ${key(['cubicBezier', 'standard'])}, color .3s ${key(['cubicBezier', 'standard'])};
  white-space: nowrap;
  width: ${({ width }) => width};

  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ shadow }) => css`box-shadow: ${key(['shadows', shadow])};`}

  &:hover, &:focus, &:active {
  background-color: ${({ disabled, hoverBackgroundColor: { type, position } }) => {
    return disabled ? palette('grayscale', 3) : palette(type, position)
  }};
  color: ${({ disabled, hoverColor: { type, position } }) => {
    return disabled ? palette('grayscale', 2) : palette(type, position)
  }};
  }

  &:focus {
    outline: none;
  }
`
