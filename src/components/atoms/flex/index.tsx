import styled, { css } from 'styled-components'
import { key } from 'styled-theme'

type FlexProps = {
  flow: string
  halign?: string
  margin?: string
  maxWidth?: string
  padding?: string
  shadow?: string
  valign?: string
  width: string
  wrap?: string
}

const Flex = styled.div<FlexProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ flow }) => flow};
  width: ${({ width }) => width};

  ${({ halign }) => halign && `justify-content: ${halign};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ shadow }) => shadow && css`box-shadow: ${key(['shadows', shadow])};`}
  ${({ valign }) => valign && `align-items: ${valign};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`

Flex.defaultProps = {
  flow: 'row',
  width: '100%',
}

export default Flex
