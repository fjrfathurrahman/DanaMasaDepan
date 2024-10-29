'use client';

import { NavbarDashboard } from "@/components/layouts/NavbarDashboard";
import { Layout } from "@/components/modules/import";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); 

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);

    if (!loggedInStatus) {
      router.push('/authentication');
    }
  }, [router]);

  if (isLoggedIn === null) {
    return null;
  }

  return (
    <Layout.Container className="max-w-[1024px] space-y-8">
      <NavbarDashboard />
      {children}
    </Layout.Container>
  );
}
