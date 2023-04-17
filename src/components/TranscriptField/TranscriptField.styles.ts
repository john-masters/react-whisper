import styled from "styled-components"

export const TranscriptFieldStyles = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid black;
  width: 30%;
  #transcriptField {
    border: 1px solid black;
    white-space: pre-wrap;
  }
`