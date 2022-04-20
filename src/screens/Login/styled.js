import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2vh 3%;
  background: url("./login-bg.png") no-repeat center;
  background-size: cover;

  form {
    background: rgba(30, 30, 30, 95%);
    box-shadow: rgb(0 0 0 / 30%) 0px 0px 6px 3px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* align-items: center; */
    padding: 40px 30px;
    height: 90vh;
    border-radius: 8px;
    width: 445px;

    input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      padding: 15px;
      background: rgb(238, 238, 238);
      font-size: 16px;
      color: rgb(32, 30, 31);
      box-shadow: unset;
      border: none;
    }

    p#error {
      color: red;
    }

    a {
      color: #963cf1;
    }
  }
`;

export const InputContainer = styled.div``;

export const ButtonContainer = styled.div``;
