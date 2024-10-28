"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProgressBar
          height="4px"
          color="#3da9fc"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Toaster />
        {children}
      </QueryClientProvider>
    </>
  );
}