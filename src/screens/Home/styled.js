import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 44px;
  background: linear-gradient(0deg, #010101, rgba(9, 13, 18, 0.5) 100%),
    url(${(props) => props.url}) no-repeat;
  background-size: cover;
  background-position: 50% 10%;

  .modal-video-close-btn {
    cursor: pointer;
  }

  @media screen and (max-width: 850px) {
    padding: 0;
  }
`;

export const MovieInfos = styled.div`
  width: 110vh;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 850px) {
    margin: 0 auto;
  }
`;

export const CtaContainer = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 599px) {
    width: 95%;
  }
`;

export const CtaPlay = styled.div`
  -webkit-tap-highlight-color: transparent;

  img {
    transition: all ease 0.7s;
    cursor: pointer;
  }

  img:hover {
    transform: rotate(360deg);
  }
`;

export const MarginTop = styled.div`
  margin-top: 15px;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #010101;
  background: -webkit-linear-gradient(top, #010101, #1e1e1e);
  background: -moz-linear-gradient(top, #010101, #1e1e1e);
  background: linear-gradient(to bottom, #010101, #1e1e1e);
`;
