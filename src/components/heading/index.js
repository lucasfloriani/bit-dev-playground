import React from 'react'
import styled from 'styled-components'
import {
  font, key, palette, size,
} from 'styled-theme'
// import { ColorProp } from '../theme/types'

// type HeadingHTML = 1 | 2 | 3 | 4 | 5 | 6

// type HeadingProps = {
//   align: string
//   children: any
//   color: ColorProp
//   fontSize: string
//   fontWeight: string
//   hoverColor: ColorProp
//   level: HeadingHTML
//   margin: string
// }

const Heading = styled(({
  children, color, fontSize, hoverColor, level, margin, ...props
// }: HeadingProps) => React.createElement(`h${level}`, props, children))`
}) => React.createElement(`h${level}`, props, children))`
  color: ${({ color: { type, position } }) => palette(type, position)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => size(fontSize)};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  margin: ${({ margin }) => margin};
  transition: color .3s ${key(['cubicBezier', 'standard'])};

  ${({ align }) => align && `text-align: ${align};`}

  :hover {
    color: ${({ hoverColor: { type, position } }) => palette(type, position)}
  }
`

Heading.defaultProps = {
  color: { type: 'grayscale', position: 0 },
  fontSize: 'extraLarge',
  fontWeight: 'medium',
  hoverColor: { type: 'grayscale', position: 0 },
  level: 1,
  margin: '0',
}

export default Heading
