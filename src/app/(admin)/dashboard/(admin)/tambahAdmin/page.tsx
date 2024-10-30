"use client";

import usePostAdmin from "@/lib/hooks/admin/usePostAdmin";
import { Form } from "@/components/fragments/Form";
import { AddAdminSchema, ShemaAddAdmin } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
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
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Header>
          <h2>Menambah Admin</h2>
          <p>
            Halaman ini untuk memasukkan informasi baru untuk admin. Anda akan
            diminta untuk mengisi formulir dengan data yang diperlukan, seperti
            nama, email, dan hak akses. Pastikan semua data yang dimasukkan
            sudah benar dan valid sebelum menyimpan.
          </p>
        </Form.Header>

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

        <Form.Footer isLoading={isPending || methods.formState.isSubmitting} />
      </Form>
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
  },
];
