import { ReactNode } from 'react';
import { ReactQueryProvider } from './react-query-provider';

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ReactQueryProvider>
    {children}
  </ReactQueryProvider>
);
