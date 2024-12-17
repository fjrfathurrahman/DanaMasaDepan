'use client';

import formatDate from "@/lib/utils/FormatDate";
import ToggleTheme from "../fragments/ToggleTheme";
import { Layout } from "../modules/import";
import { Icons } from "@/lib/resource/icons";
import { usePathname, useRouter } from "next/navigation";
import { CustomDropdown } from "../fragments/DropdownCustom";

export const NavbarDashboard = () => {
  const path = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("adminId");
    router.push("/");
  };

  return (
    <Layout.Box className="border-b pb-6 mb-8 flex justify-between items-center">
      <div>
        <h4 className="font-bold">Dashboard</h4>
        <small>{formatDate()}</small>
      </div>

      <div className="flex gap-3">
        <ToggleTheme />
        <CustomDropdown
          links={Menu.links}
          services={Menu.services}
          path={path}
          onLogout={handleLogout}
        />
      </div>
    </Layout.Box>
  );
};

const Menu = {
  links: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Icons.MdOutlineDashboardCustomize,
    },
    {
      title: "Nasabah",
      href: "/dashboard/nasabah",
      icon: Icons.FiUsers,
    },
    {
      name: "Admin",
      title: "Admin",
      href: "/dashboard/admin",
      icon: Icons.RiAdminLine,
    },
    {
      name: "Transaksi",
      title: "Transaksi",
      href: "/dashboard/transaksi",
      icon: Icons.HiOutlineCash,
    },
  ],
  services: [
    {
      name: "Profile",
      title: "Profile",
      href: "/",
      icon: Icons.FiUser,
    },
    {
      name: "Pengaturan",
      title: "Pengaturan",
      href: "/",
      icon: Icons.MdOutlineSettings,
    },
    {
      name: "Logout",
      title: "Logout",
      href: "/",
      icon: Icons.RiLogoutCircleRLine,
    },
  ],
};
