import styled from 'styled-components'
import { key, palette } from 'styled-theme'
import { ColorProp } from '../../themes/wrapper/types'

type CardProps = {
  backgroundColor: ColorProp
  borderRadius: string
  height?: string
  margin?: string
  padding?: string
  shadow: string
  width?: string
}

const Card = styled.div<CardProps>`
  background-color: ${({ backgroundColor: { type, position } }) => palette(type, position)};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadow }) => key(['shadows', shadow])};
  box-sizing: border-box;
  overflow: hidden;
  transition: .3s background-color cubic-bezier(0.4, 0.0, 0.2, 1),
              .3s transform cubic-bezier(0.4, 0.0, 0.2, 1);

  ${({ height }) => height && `height: ${height};`};
  ${({ margin }) => margin && `margin: ${margin};`};
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ width }) => width && `width: ${width};`};
`

Card.defaultProps = {
  backgroundColor: { type: 'grayscale', position: 4 },
  borderRadius: '10px',
  shadow: 'extraSmall',
}

export default Card
