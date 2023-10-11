'use client';

import React from 'react';
import { styled } from 'styled-components';

const AppLayoutContainer = styled.div`
  position: absolute;
  z-index: 2;
  animation: slideIn 1s cubic-bezier(0.04, 0.48, 0.59, 0.19);

  @keyframes slideIn {
    from {
      margin-top: 100%;
      /* width: 300%; */
    }

    to {
      margin-top: 0%;
      /* width: 100%; */
    }
  }
`;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

export default React.memo(AppLayout);
