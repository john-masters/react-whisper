import styled from "styled-components"

interface Props {
  width: number;
}

export const HeaderStyles = styled.header`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  h1 {
    font-size: xxx-large;
    font-weight: 1000;
  }
  span {
    font-size: xx-large;
  }
  p {
    font-size: x-large;
    font-weight: 800;
  }

  ${({ width }: Props) => width > 600 ? `
    width: 50%;
  ` : `
    width: 100%;
  `}
`