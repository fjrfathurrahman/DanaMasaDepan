"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import AnimatedCursor from "react-animated-cursor";
import { useInitializeTheme, useTheme } from "@/lib/utils/ChangeTheme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  useInitializeTheme();
  const { theme } = useTheme()

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        
        <ProgressBar
          height="4px"
          color="#3da9fc"
          options={{ showSpinner: false }}
          shallowRouting
        />

        <AnimatedCursor
          innerSize={10} 
          outerSize={30} 
          color={theme === 'dark' ? "255, 255, 255": "0, 0, 0"}
          outerAlpha={0.3} 
          innerScale={1.5} 
          outerScale={2} 
          clickables={[
            "a",
            "button",
            ".link",
          ]}
        />
        <Toaster />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
