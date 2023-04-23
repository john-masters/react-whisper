import styled from "styled-components"

interface Props {
  width: number;
}

export const PaymentFormStyles = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50%;

  ${({ width }: Props) => width > 600 ? `
    width: 50%;
  ` : `
    width: 100%;
  `}
`
