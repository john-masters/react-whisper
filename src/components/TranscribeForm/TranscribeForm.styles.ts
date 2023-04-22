import styled from "styled-components"

export const TranscribeFormStyles = styled.form`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .fileContainer {
    label {
      border: 1px solid black;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    input {
      display: none;
    }
  }
  
  .formatContainer {
    display: flex;
    gap: 0.5rem;
    select {
      font-size: medium;
    }

  }

`