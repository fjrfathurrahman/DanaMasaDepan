"use client";

import { Layout } from "../modules/import";
import { ToggleTheme } from "../fragments/ToggleTheme";
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

export const Navbar = () => {
  return (
    <Layout.Section>
      <Layout.Container sizing={["h-max"]} spacing={["py-4"]} className="fixed top-0 left-0 right-0 z-50 backdrop-blur mx-auto border-b ">
        <div className="flex items-center justify-between">
          <span>Logo</span>

          <div className="flex items-center gap-3">
            <ToggleTheme />
            <DropdownMenus />
          </div>
        </div>
      </Layout.Container>
    </Layout.Section>
  );
};

export const DropdownMenus = () => {
  const path = usePathname();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button isIconOnly variant="light" color="primary">
          <Icon icon={Icons.MdMenu} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Menu Links">
        {Resource.dMenu.links.map((item) => (
          <DropdownItem
            key={item.title}
            color={path === item.href ? "primary" : "default"}
            className={path === item.href ? "text-primary" : undefined}
            startContent={item.icon ? <Icon icon={item?.icon} size="sm" /> : null}
          >
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
