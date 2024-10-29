'use client';

import formatDate from "@/lib/utils/FormatDate";
import { Layout } from "../modules/import";
import ToggleTheme from "../fragments/ToggleTheme";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import Icon from "../common/Icon";
import { Icons } from "@/lib/resource/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export const NavbarDashboard = () => {
  const path = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("adminId");
    router.push("/");
  };

  return (
    <Layout.Box className="border-b pb-6 flex justify-between items-center">
      <div>
        <h4>Dashboard</h4>
        <small>{formatDate()}</small>
      </div>

      <div className="flex gap-3">
        <ToggleTheme />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly variant="light" color="primary">
              <Icon icon={Icons.MdMenu} />
            </Button>
          </DropdownTrigger>

          <DropdownMenu aria-label="Menu Links">
            <DropdownSection title="Links" showDivider>
              {Menu.links.map((item) => (
                <DropdownItem
                  key={item.title}
                  color={path === item.href ? "primary" : "default"}
                  className={path === item.href ? "text-primary" : undefined}
                  startContent={item.icon ? <Icon icon={item.icon} size="sm" /> : null}
                >
                  <Link href={item.href} passHref>
                    {item.title}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownSection>

            <DropdownSection title="Services" showDivider>
              {Menu.services.map((item) => (
                <DropdownItem
                  key={item.title}
                  color={item.name === "Logout" ? "danger" : "default"}
                  variant={item.name === "Logout" ? "bordered" : "light"}
                  className={item.name === "Logout" ? "text-danger" : undefined}
                  startContent={
                    item.icon ? <Icon icon={item.icon} size="sm" /> : null
                  }
                >
                  <button type="button" onClick={item.name === "Logout" ? () => logout : () => toast.info('Fitur belum tersedia')}>
                    {item.title}
                  </button>
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
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
      href: "/dashboard/tableNasabah",
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
