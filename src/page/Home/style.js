import styled from "styled-components";

export const Container = styled.main`
  padding-bottom: 200px;

  @media (max-width: 450px) {
    padding-bottom: 260px;
  }

  section {
    opacity: 0;
    transform: translateX(30px);
    transition: 1500ms;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 8rem;

    &:last-child {
      margin-bottom: 8rem;
    }

    img {
      width: 28rem;
      height: 24rem;
      border-radius: 0.5rem;

      @media (max-width: 450px) {
        width: 25rem;
        height: 22rem;
      }

      @media (max-width: 370px) {
        width: 23rem;
        height: 20rem;
      }
    }

    div {
      margin: 0 auto;
      width: 30rem;
      padding: 0 0.5rem;

      h2,
      p {
        text-align: center;
      }

      .about_author {
        @media (max-width: 901px) {
          margin-top: 1rem;
        }
      }
    }
  }

  section.show {
    transform: translateX(0);
    opacity: 1;
  }
`;
