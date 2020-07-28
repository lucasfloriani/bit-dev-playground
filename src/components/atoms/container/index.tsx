import styled from 'styled-components'

type ContainerProps = {
  valign?: string
  halign?: string
  flow: string
  padding: string
  windowHeight: boolean
  wrap?: string
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ flow }) => flow};
  margin: auto;
  max-width: 1200px;
  padding: ${({ padding }) => padding};
  width: 100%;

  ${({ halign }) => halign && `justify-content: ${halign};`}
  ${({ valign }) => valign && `align-items: ${valign};`}
  ${({ windowHeight }) => windowHeight && 'min-height: 100vh;'}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`

Container.defaultProps = {
  flow: 'row',
  padding: '8px 12px',
  windowHeight: false,
}

export default Container
