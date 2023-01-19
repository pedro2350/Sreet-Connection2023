import styled, { css } from 'styled-components';

import { Tooltip } from '../../tooltip/Tooltip';

export const Container = styled.div`
  background: ${({ theme }) => theme.primary_light};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.primary_light};
  padding: 16px;
  width: 100%;
  color: ${({ theme }) => theme.dark_gray};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${propsTheme => propsTheme.theme.error_title};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${propsTheme => propsTheme.theme.gray_color};
      border-color: ${propsTheme => propsTheme.theme.gray_color};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${propsTheme => propsTheme.theme.gray_color};
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${({ theme }) => theme.text};

    &::placeholder {
      color: ${({ theme }) => theme.dark_gray};
    }
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: ${({ theme }) => theme.error_title};

    &::before {
      border-color: ${({ theme }) => theme.error_title} transparent;
    }
  }
`;
