"use client"
import React from 'react';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const query = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus:false
  }
}})

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={query}>
      {children}
      <ReactQueryDevtools position='bottom' initialIsOpen/>
    </QueryClientProvider>
  );
}
