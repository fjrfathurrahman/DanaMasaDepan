"use client";

import { Input } from "@nextui-org/react";
import { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useFormContext } from "react-hook-form";

const Field = ({ name, label, placeholder, type = "text", element}: RenderInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState: { errors }} = useFormContext();

  const getErrorMessage = () => {
    return errors[name]?.message as string;
  };

  const baseProps = {
    label,
    placeholder: placeholder || label,
    isInvalid: Boolean(errors[name]),
    errorMessage: getErrorMessage(),
    labelPlacement: "outside" as const,
  };

  const renderField = () => {
    switch (element) {
      case "password":
        return (
          <Input
            {...baseProps}
            {...register(name)}
            type={showPassword ? "text" : "password"}
            endContent={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </button>
            }
          />
        );

      default:
        return <Input {...baseProps} type={type} {...register(name)} />;
    }
  };

  return renderField();
};

export default Field;

interface RenderInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  element?: "text" | "password" | "textArea";
}
