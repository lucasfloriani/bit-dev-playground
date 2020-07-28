import styled from 'styled-components'

// type GridProps = {
//   column: string,
//   columnLength?: string,
//   halign?: string,
//   height?: string,
//   gap: string,
//   margin?: string,
//   maxWidth?: string,
//   padding?: string,
//   rows?: string,
//   valign?: string,
//   width: string,
// }

// const Grid = styled.div<GridProps>`
const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: ${({ gap }) => gap};
  grid-template-columns: ${({ column }) => column};
  width: ${({ width }) => width};

  ${({ columnLength }) => columnLength && `grid-column: ${columnLength};`}
  ${({ halign }) => halign && `justify-content: ${halign};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  ${({ valign }) => valign && `align-items: ${valign};`}
`

Grid.defaultProps = {
  column: '1fr',
  gap: '15px',
  width: '100%',
}

export default Grid
