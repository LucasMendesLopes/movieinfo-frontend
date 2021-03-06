import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 80px 60px;
  background: linear-gradient(0deg, #010101, rgba(9, 13, 18, 0.5) 130%),
    url(${(props) => props.url}) no-repeat center;
  background-size: cover;

  @media (max-width: 500px) {
    padding: 60px 30px;
  }

  @media (max-width: 1024px) {
    height: 100%;
  }
`;

export const VoltarContainer = styled.div`
  width: 140px;
  cursor: pointer;
  margin: 25px 0 40px;
  display: flex;
  gap: 20px;
  align-items: center;
  -webkit-tap-highlight-color: transparent;

  img {
    width: 26px;
    transition: all 0.7s ease;
  }

  span {
    font-size: 1.5rem;
  }

  :hover {
    img {
      transform: translateX(-18px);
    }
  }
`;

export const MovieContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  gap: 40px;

  img {
    max-width: 80%;
    width: 278px;
    height: 419px;
    border-radius: 5px;
  }

  @media (max-width: 830px) {
    flex-direction: column;

    img {
      height: auto;
    }
  }
`;

export const MovieInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.3;

  h1 {
    font-size: 2.2rem;
  }

  p {
    color: #999999;
    font-size: 1.3rem;
  }

  button.button-overview {
    padding: 3px 6px;
    background-color: gray;
    border-radius: 3px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    border: none;
    color: #ffffff;
  }

  button.button-trailer {
    margin-top: 30px;
  }

  ul {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    align-items: center;
    gap: 15px;
    list-style: none;

    ::-webkit-scrollbar {
      display: none;
    }

    li {
      background-color: rgba(50, 50, 50, 0.5);
      border-radius: 3px;
      white-space: nowrap;
      padding: 6px 8px;
      text-align: center;
      font-size: 1rem;
    }
  }
`;
