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
import { IconType } from "react-icons";
import { toast } from "sonner";

interface DropdownProps {
  links: { title: string; href: string; icon?: IconType }[];
  services: { title: string; name: string; icon?: IconType }[];
  path: string;
  onLogout: () => void;
}

export const CustomDropdown: React.FC<DropdownProps> = ({ links, services, path, onLogout }) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button isIconOnly variant="light" color="primary">
          <Icon icon={Icons.MdMenu} />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Menu Links">
        <DropdownSection title="Pages">
          {links.map((item) => (
            <DropdownItem
              key={item.title}
              color={path === item.href ? "primary" : "default"}
              className={path === item.href ? "text-primary" : undefined}
              startContent={item.icon ? <Icon icon={item.icon} size="sm" /> : null}
            >
              <Link href={item.href}>{item.title}</Link>
            </DropdownItem>
          ))}
        </DropdownSection>

        <DropdownSection title="Services">
          {services.map((item) => (
            <DropdownItem
              key={item.title}
              onClick={item.name === "Logout" ? () => onLogout() : () => toast.info("Fitur belum tersedia")}
              color={item.name === "Logout" ? "danger" : "default"}
              variant={item.name === "Logout" ? "bordered" : "light"}
              className={item.name === "Logout" ? "text-danger" : undefined}
              startContent={
                item.icon ? <Icon icon={item.icon} size="sm" /> : null
              }
            >
              {item.title}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
