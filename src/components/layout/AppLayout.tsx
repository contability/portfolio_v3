'use client';

import React from 'react';
import { styled } from 'styled-components';

const AppLayoutContainer = styled.div<{ $isDown: boolean }>`
  position: absolute;
  z-index: 2;
  /* FIXME: slideDown is not working */
  animation: ${({ $isDown }) => `${$isDown ? 'slideInDown' : 'slideInUp'} 1s cubic-bezier(0.04, 0.48, 0.59, 0.19);`};

  @keyframes slideInUp {
    from {
      margin-top: 100%;
    }

    to {
      margin-top: 0%;
    }
  }

  @keyframes slideInDown {
    from {
      margin-bottom: 100%;
    }

    to {
      margin-bottom: 0;
    }
  }
`;

const AppLayout = ({ children, isDown = false }: { children: React.ReactNode; isDown?: boolean }) => {
  return <AppLayoutContainer $isDown={isDown}>{children}</AppLayoutContainer>;
};

export default React.memo(AppLayout);
