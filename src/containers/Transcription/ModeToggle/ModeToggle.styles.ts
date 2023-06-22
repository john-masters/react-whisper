import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
  width: number;
}

export const ModeToggleStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
  ` : `
  `}

  ${({ width }: Props) => width > 600 ? `
    width: 50%;
  ` : `
    width: 100%;
  `}

`