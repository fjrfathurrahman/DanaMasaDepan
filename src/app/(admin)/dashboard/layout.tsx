import { ToggleTheme } from "@/components/fragments/ToggleTheme";
import { DropdownMenus } from "@/components/layouts/Navbar";
import { Layout } from "@/components/modules/import";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout.Container className="max-w-[768px] space-y-12">
      <Navbar />
      {children}
    </Layout.Container>
  );
}

export const Navbar = () => {
  return (
    <Layout.Box className="border-b pb-6 flex justify-between items-center">
      <div>
        <h4 className="font-medium">Dashboard</h4>
        <small>Date : {new Date().toDateString()}</small>
      </div>

      <div className="flex gap-3">
        <ToggleTheme />
        <DropdownMenus menu={Menu} />
      </div>
    </Layout.Box>
  );
};

const Menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: null
  },
  {
    title: "Table Nasabah",
    href: "/dashboard/tableNasabah",
    icon: null
  },
  {
    title: "Tambah",
    href: "/dashboard/tambahNasabah",
    icon: null
  },
];
