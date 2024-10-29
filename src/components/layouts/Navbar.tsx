"use client";

import { Layout } from "../modules/import";
import ToggleTheme  from "../fragments/ToggleTheme";
import { Icons } from "@/lib/resource/icons";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Icon from "../common/Icon";
import { usePathname } from "next/navigation";
import { Resource } from "@/lib/resource";
import { IconType } from "react-icons";
import Link from "next/link";
import formatDate from "@/lib/utils/FormatDate";

export const Navbar = () => {
  return (
    <Layout.Section>
      <Layout.Container sizing={["h-max"]} spacing={["py-4"]} className="fixed top-0 left-0 right-0 z-50 backdrop-blur mx-auto border-b ">
        <div className="flex items-center justify-between">
          <span>Logo</span>

          <div className="flex items-center gap-3">
            <ToggleTheme />
            <DropdownMenus menu={Resource.dMenu.links} />
          </div>
        </div>
      </Layout.Container>
    </Layout.Section>
  );
};

export const DropdownMenus = ({menu}: {menu: {title: string; href: string; icon?: IconType | null}[]}) => {
  const path = usePathname();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button isIconOnly variant="light" color="primary">
          <Icon icon={Icons.MdMenu} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Menu Links">
        {menu.map((item) => (
          <DropdownItem
            key={item.title}
            color={path === item.href ? "primary" : "default"}
            className={path === item.href ? "text-primary" : undefined}
            startContent={item.icon ? <Icon icon={item.icon as unknown as IconType} size="sm" /> : null}
          >
            <Link href={item.href} passHref>
              {item.title}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const NavbarDashboard = () => {
  return (
    <Layout.Box className="border-b pb-6 flex justify-between items-center">
      <div>
        <h4>Dashboard</h4>
        <small>{formatDate()}</small>
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
    title: "Nasabah",
    href: "/dashboard/tableNasabah",
    icon: null
  },
  {
    name: "Admin",
    title: "Admin",
    href: "/dashboard/admin",
  },
  {
    name: "Transaksi",
    title: "Transaksi",
    href: "/dashboard/transaksi",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: null
  },
  {
    title: "Pengaturan",
    href: "/dashboard/pengaturan",
    icon: null
  },
  {
    title: "Logout",
    href: "/",
    icon: null
  }
];
