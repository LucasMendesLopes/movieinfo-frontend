import styled from "styled-components";

export const MovieRowContainer = styled.div`
  h2 {
    font-size: 1.4rem;
    margin: 0 40px 20px;
  }

  ul {
    gap: 20px;
    list-style: none;
    padding: 0 40px 40px;
    display: flex;
    overflow-y: hidden;
    transform: translateZ(0);
    scrollbar-width: none;

    li {
      cursor: pointer !important;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url(${(props) => props.url}) no-repeat;
      background-size: cover;
      -webkit-tap-highlight-color: transparent;

      img.poster {
        width: 200px;
        border-radius: 5px;
        transition: all ease-out 0.3s;
      }

      img.icon {
        position: absolute;
        opacity: 0;
        width: 40px;
        transition: all ease-out 0.3s;
      }

      :hover {
        img.poster {
          /* transform: scale(1.1); */
          filter: brightness(0.1);
        }

        img.icon {
          opacity: 1;
        }
      }

      @media screen and (max-width: 1024px) {
        :hover {
          img.poster {
            transform: none;
            filter: none;
          }

          img.icon {
            opacity: 0;
          }
        }
      }
    }

    ::-webkit-scrollbar {
      overflow: hidden;
    }
  }
`;
