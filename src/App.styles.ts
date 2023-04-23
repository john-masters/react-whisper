import styled from 'styled-components'

interface Props {
  isDarkMode: boolean;
}

export const AppStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: medium;
  padding: 0 2rem;

  ${({ isDarkMode }: Props) => isDarkMode ? `
    background-color: #000;
    color: #fff;
  ` : `
    background-color: #fff;
    color: #000;
  `}
`