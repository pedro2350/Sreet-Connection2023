import styled from 'styled-components';

import colors from '../../styles/themes/colors';

export const Container = styled.div`
  grid-area: AS;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;
