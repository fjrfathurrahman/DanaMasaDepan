"use client";

import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useFormContext } from "react-hook-form";
import { RenderInputProps } from "@/lib/types/Types";

const Field = ({ name, label, placeholder, type = "text", element, options, dynamicOptionsFetcher }: RenderInputProps) => {
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
      case "textArea":
        return <Textarea {...baseProps} {...register(name)} minRows={4} />;

      case "password":
        return (
          <Input {...baseProps} {...register(name)}
            type={showPassword ? "text" : "password"}
            endContent={
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </button>
            }
          />
        );

      case "select":
        const fetchedOptions = dynamicOptionsFetcher ? dynamicOptionsFetcher() : options || [];

        return (
          <Select items={fetchedOptions} {...baseProps} {...register(name)}>
            {fetchedOptions?.map((option) => (
              <SelectItem key={option.key} value={option.key} {...register(name)}>{option.label}</SelectItem>
            ))}
          </Select>
        )

      case "textArea":
        return <Textarea {...baseProps} {...register(name)} minRows={4} />;
      
      default:
        return <Input {...baseProps} type={type} {...register(name)} />;
    }
  };

  return renderField();
};

export default Field;