import styled from "styled-components";

const NewsletterWrapper = styled.section`
  width: var(--width);
  margin: 0 auto;
  .letter-section {
    margin: 4rem 0;
    display: grid;

    h3 {
      text-align: center;
      color: var(--primary-clr);
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    p {
      text-align: center;
      color: var(--color-white);
      font-size: 1rem;
    }

    .form {
      display: flex;
      justify-content: center;
      align-items: center;

      .input {
        width: 65%;
        height: 100%;
        margin-right: 1rem;
        outline: none;
      }

      .btn {
        background-color: var(--primary-clr);
        color: var(--primary-background);
        border: transparent;
        padding: 0.3rem 0.5rem;
        font-size: 0.95rem;
        font-weight: var(--fw-500);
        border-radius: 0.35rem;
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .letter-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 7rem;

      div {
        width: 50vw;

        h3 {
          width: 70vw;
          text-align: left;
          font-size: 36px;
          letter-spacing: 3px;
          font-weight: var(--fw-500);
        }
        p {
          width: 40vw;
          text-align: left;
          font-weight: var(--fw-400);
          font-size: 18px;
        }
      }
      .form {
        width: 100vw;
        display: flex;
        justify-content: center;
        .input {
          height: 7vh;
          margin-right: 0.5rem;
          font-size: 18px;
          background: #f7f7f7;
          border: 1px solid #b3b3b3;
          border-radius: 5px;
        }
        .btn {
          padding: 0.5rem 0.85rem;
          height: 7vh;
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
  }
`;
export default NewsletterWrapper;
