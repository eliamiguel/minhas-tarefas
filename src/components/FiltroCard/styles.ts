import styled from 'styled-components'

// import { Props } from '.'
// type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'| 'valor'>
type Props = {
  ativo: boolean
}
export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90ff' : '#a1a1a1')};
  backeground-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`
export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`
export const Label = styled.label`
  font-size: 14px;
`