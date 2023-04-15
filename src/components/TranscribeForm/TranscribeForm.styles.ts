import styled from "styled-components"

export const TranscribeFormStyles = styled.form`
  display: flex;
  flex-direction: column;

  #submit {
    font-family: 'Figtree', sans-serif;
    font-weight: 600;
    border: 1px solid black;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #f1f1f1;
    font-size: 1rem;
    cursor: pointer;
  }

  #file {
    font-family: 'Figtree', sans-serif;
    font-weight: 600;
    border: 1px solid black;
    display: flex;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #f1f1f1;
    font-size: 1rem;
    cursor: pointer;
    color: black;
  }

  #format {
    font-family: 'Figtree', sans-serif;
    font-weight: 600;
    border: 1px solid black;
    text-align: center;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #f1f1f1;
    font-size: 1rem;
    cursor: pointer;
  }
`
