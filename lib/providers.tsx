'use client';

import { palette } from '../src/styles/theme';
import StyledComponentsRegistry from './registry';
import { ThemeProvider } from 'styled-components';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={palette}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
