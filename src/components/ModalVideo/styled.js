import styled from "styled-components";

export const ModalVideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const ModalVideoBody = styled.div`
  max-width: 90%;
  width: 147vh;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const ModalVideoInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  iframe {
    top: 0;
    left: 0;
    width: 100%;
    height: 77%;
    max-height: 53vw;
  }

  @media (orientation: landscape) {
    padding: 10px 60px;
    box-sizing: border-box;
  }
`;

export const ModalVideoWrap = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  background-color: #333;
`;
