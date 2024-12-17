"use client";

import usePostAdmin from "@/lib/hooks/admin/usePostAdmin";
import { Form } from "@/components/fragments/Form";
import { AdminSchema, SchemaAdmin } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Inputs } from "@/lib/resource";
import Field from "@/components/common/Field";

export default function TambahAdmin() {
  const { mutate, isPending, reset } = usePostAdmin();

  const methods = useForm<SchemaAdmin>({
    resolver: zodResolver(AdminSchema),
    mode: "onChange",
  });

  const onSubmit = (data: SchemaAdmin) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", data.role);
    formData.append("image", data.image[0]);

    mutate(formData);

    reset();
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Inputs.Admin.map((item) => (
            <Field key={item.name} {...item} />
          ))}
        </div>

        <Form.Footer isLoading={isPending || methods.formState.isSubmitting} />
      </Form>
    </FormProvider>
  );
}