import styled from "styled-components"

interface Props {
  isDarkMode: boolean;
  error: string | null;
}

export const CheckoutFormStyles = styled.form`
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    border-radius: 6px;
    margin-bottom: 6px;
    max-height: 44px;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  .card-error {
    text-align: center;
    padding: 0.5rem;
    background-color: red;
    color: #fff;
    border-radius: 0 0 8px 8px;
    border-top: 1px solid black;
  }

  #card-element {
    border-radius: 8px 8px 0px 0px;
    padding: 0.5rem;
    max-height: 44px;
    width: 100%;
    box-sizing: border-box;
  }

  #payment-request-button {
    margin-bottom: 32px;
  }

  button {
    border-left: none;
    border-right: none;
    border-bottom: none;
    padding: 0.5rem;
    cursor: pointer;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  ${({ isDarkMode }: Props) => isDarkMode ? `
    border: 1px solid #fff;
    #card-element {
      filter: invert(1)
    }
    button {
      background-color: #fff;
      color: #000;
      border-top: 1px solid #fff;
    }
  ` : `
    border: 1px solid #000;
    button {
      background-color: #000;
      color: #fff;
      border-top: 1px solid #000;
    }
  `}
  ${({ error }: Props) => error ? `
    button {
    }
  ` : `
    button {
      border-radius: 0px 0px 8px 8px;
    }
  `}
`