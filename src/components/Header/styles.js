import styled from 'styled-components';

export const HeaderWrapper = styled.header`

    width: 100%;
    height: 14vh;
    border: 1px solid black;
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
        display: flex;
        align-items: center;
    }

`

export const LogoContainer = styled.div`
  flex-grow: 0.4;

  svg {
    font-size: 28px;
    padding: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  margin: 0 2% 0 2%;

  input {
    height: 30px;
    border: solid 1px #c9c9c9;
    border-radius: 2px;  
    font-size: 18px;
    padding: 0 4px;
    width: 80%;
    border-right: none;
  }

  input::placeholder {
    font-size: 14px;
  }

  svg {
    font-size: 18px;
    height: 30px;
    padding: 0 10px;
    border: solid 1px #c9c9c9;
    border-radius: 2px;
    background-color: ${(props) => props.theme.gray2};
  }

  svg:hover {
    cursor: pointer;
    background-color: #c9c9c9;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
`