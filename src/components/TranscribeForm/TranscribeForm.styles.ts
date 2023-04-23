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

  ${({ width }: Props) => width > 600 ? `
    width: 50%;
  ` : `
    width: 100%;
  `}
`