import styled from "styled-components";

const FooterLastWrapper = styled.section`
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    color: var(--color-white);
    padding: 1rem 0.5rem;
    gap: 1.5rem;

    h4 {
      align-items: center;
      padding-top: 0.35rem;
    }

    .social-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      /* .social-link {
        background-color: #ccc;
        padding: 0.2rem;
        cursor:pointer
      } */
    }
  }

  @media screen and (min-width: 768px) {
    .footer {
      gap: 8rem;
      padding: 0.45rem;
    }
  }

  @media screen and (min-width: 992px) {
    .footer {
      gap: 10rem;
    }
  }
`;
export default FooterLastWrapper;
