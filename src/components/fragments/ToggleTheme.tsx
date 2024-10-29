'use client';

import { useTheme } from "@/lib/utils/ChangeTheme";
import { Button } from "@nextui-org/react";
import { Icons } from "@/lib/resource/icons";
import Icon from "../common/Icon";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button isIconOnly onClick={toggleTheme} variant="light">
      <Icon icon={
        theme !== 'light' ? Icons.MdOutlineWbSunny : Icons.LuMoonStar
      }/>
    </Button>
  )
}

export default ToggleTheme