"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
// import { useTheme } from "@/lib/utils/ChangeTheme";
// import AnimatedCursor from "react-animated-cursor";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  // const { theme } = useTheme()

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        
        <ProgressBar height="4px" color="#3da9fc" options={{ showSpinner: false }} shallowRouting />

        {/* <AnimatedCursor
          innerSize={10} 
          outerSize={25} 
          color={theme === 'dark' ? "255, 255, 255": "75,85,99"}
          outerAlpha={0.2} 
          innerScale={1.5} 
          outerScale={2} 
          clickables={[ "a", "button", ".link" ]}
        /> */}

        <Toaster />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
