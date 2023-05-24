'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnMount: false } } })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <QueryClientProvider client={queryClient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
