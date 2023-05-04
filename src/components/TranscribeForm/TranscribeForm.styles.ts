import styled from "styled-components"

interface Props {
  width: number;
}

export const TranscribeFormStyles = styled.form`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  /* ${({ width }: Props) => width > 600 ? `
    width: 60%;
  ` : `
    width: 100%;
  `} */
`