'use client';

import Field from "@/components/common/Field";
import useUpdateAdmin from "@/lib/hooks/admin/useUpdateAdmin";
import { Form } from "@/components/fragments/Form";
import { Inputs } from "@/lib/resource";
import { SchemaAdmin } from "@/lib/schema";
import { FormProvider, useForm } from "react-hook-form";

export default function UpdateAdmin({params}: {params: {id: string}}) {
  const methods = useForm<SchemaAdmin>();
  const { mutate, isPending } = useUpdateAdmin();

  const onSubmit = (data: SchemaAdmin) => {
    const formData = new FormData();

    formData.append("_method", "PUT");
    if (data.name) formData.append("name", data.name);
    if (data.email) formData.append("email", data.email);
    if (data.password) formData.append("password", data.password);
    if (data.role) formData.append("role", data.role);
    if (data.image) {
      formData.append("image", data.image[0]);
    }

    mutate({ id: params.id, formData });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Header>
          <h2>Update Admin</h2>
          <p>
            Halaman ini untuk memperbarui informasi nasabah
            yang sudah ada dalam sistem. Formulir yang disediakan dirancang
            untuk mengedit data penting admin,
          </p>
        </Form.Header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Inputs.Admin.map((item) => (
            <Field key={item.name} {...item} />
          ))}
        </div>

        <Form.Footer isLoading={methods.formState.isSubmitting || isPending} />
      </Form>
    </FormProvider>
  );
}