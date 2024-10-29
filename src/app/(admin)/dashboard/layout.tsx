'use client';

import { NavbarDashboard } from "@/components/layouts/Navbar";
import { Layout } from "@/components/modules/import";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout.Container className="max-w-[1024px] space-y-8">
      <NavbarDashboard />
      {children}
    </Layout.Container>
  );
}

