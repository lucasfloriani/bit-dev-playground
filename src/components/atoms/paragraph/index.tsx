import React from 'react'
import styled, { css } from 'styled-components'
import {
  font, key, palette, size,
} from 'styled-theme'
import { ColorProp } from '../../themes/wrapper/types'

type ParagraphProps = {
  align?: string
  color: ColorProp
  fontSize: string
  fontWeight: string
  lineHeight: string
  margin: string
  width: string
}

const Paragraph = styled(({
  align, color, fontSize, fontWeight, lineHeight, margin, width, ...props
}: ParagraphProps) => <p {...props} />)`
  color: ${({ color: { type, position } }) => palette(type, position)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => size(fontSize)};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};

  ${({ align }) => align && `text-align: ${align};`}
  ${({ lineHeight }) => lineHeight && css`line-height: ${size(lineHeight)};`}
`

Paragraph.defaultProps = {
  color: { type: 'grayscale', position: 0 },
  fontSize: 'extraSmall',
  fontWeight: 'light',
  margin: '0',
  width: 'auto',
}

export default Paragraph
