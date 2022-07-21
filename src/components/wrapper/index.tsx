import React, {ReactNode} from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const Wrapper = ({ children }: { children: ReactNode }) => {

  // Create a client
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
export default Wrapper;
