import styled from 'styled-components';

import background from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  img {
    width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 350px;
    text-align: center;

    h1 {
      margin-bottom: 16px;
    }

    a {
      color: ${({ theme }) => theme.button_color};
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  > a {
    color: ${({ theme }) => theme.button_color};
    display: block;
    margin-top: 24px;
    text-decoration: none;

    transition: all 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 14px;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat;
  background-size: cover;
  filter: contrast(0.9);
`;
