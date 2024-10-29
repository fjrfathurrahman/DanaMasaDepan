
'use client';
import usePostAdmin from "@/lib/hooks/admin/usePostAdmin";
import { AddAdminSchema, ShemaAddAdmin } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function TambahAdmin() {
  const { mutate, isPending } = usePostAdmin();

  const methods = useForm<ShemaAddAdmin>({
    resolver: zodResolver(AddAdminSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ShemaAddAdmin) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.confirmPassword !== data.password) {
      toast.error("Password invalid");
    }
    
    mutate(formData);
  }

  return (
    <FormProvider {...methods}>
       <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="border-b pb-4 space-y-2.5">
            <h2>Tambah Admin</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci alias veritatis corporis velit doloremque
              sit! Id, totam tempore unde accusamus sed deleniti, minus saepe,
              voluptate recusandae explicabo iusto optio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-t">
            {Inputs.map((item) => (
              <Input
                key={item.name}
                {...item}
                isInvalid={Boolean(methods.formState.errors[item.name as keyof ShemaAddAdmin])}
                errorMessage={methods.formState.errors[item.name as keyof ShemaAddAdmin]?.message}
                {...methods.register(item.name as keyof ShemaAddAdmin)}
              />
            ))}
          </div>

          <Button
            type="submit"
            color="primary"
            variant="solid"
            className="w-full font-semibold"
            isLoading={methods.formState.isSubmitting || isPending}
            disabled={methods.formState.isSubmitting || isPending}
          >
            {methods.formState.isSubmitting || isPending
              ? "Loading..."
              : "Submit"}
          </Button>
        </form>
    </FormProvider>
  );
}

const Inputs = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Masukan Nama Anda",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Masukan Email Anda",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Masukan Password Anda",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Masukan Password Anda",
  }
]