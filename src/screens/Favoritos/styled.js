import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    list-style: none;
  }

  li {
    display: flex;
    gap: 15px;
    padding: 10px;
    flex-direction: column;
    width: 250px;
  }

  h1 {
    font-size: 1rem;
  }
`;
