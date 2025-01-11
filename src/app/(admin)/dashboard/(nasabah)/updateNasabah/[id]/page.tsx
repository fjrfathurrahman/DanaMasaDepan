"use client";

import Field from "@/components/common/Field";
import useUpdateNasabah from "@/lib/hooks/nasabah/useUpdateNasabah";
import { Form } from "@/components/fragments/Form";
import { Inputs } from "@/lib/resource";
import { ShemaCostumer } from "@/lib/schema";
import { FormProvider, useForm } from "react-hook-form";

export default function UpdateNasabah({ params }: { params: { id: string } }) {
  const methods = useForm<ShemaCostumer>();
  const { mutate, isPending } = useUpdateNasabah();

  const onSubmit = (data: ShemaCostumer) => {
    const formData = new FormData();

    formData.append("_method", "PUT");
    if (data.nisn) formData.append("nisn", data.nisn);
    if (data.name) formData.append("name", data.name);
    if (data.gender) formData.append("gender", data.gender);
    if (data.major) formData.append("major", data.major);
    if (data.class) formData.append("class", data.class);
    if (data.address) formData.append("address", data.address);
    if (data.email) formData.append("email", data.email);
    if (data.phone) formData.append("phone", data.phone.toString());
    if (data.image[0]) formData.append("image", data.image[0]);

    mutate({ id: params.id, formData });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Header>
          <h2>Update Nasabah</h2>
          <p>
            Halaman ini untuk memperbarui informasi nasabah
            yang sudah ada dalam sistem. Formulir yang disediakan dirancang
            untuk mengedit data penting nasabah,
          </p>
        </Form.Header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Inputs.Nasabah.map((item) => (
            <Field key={item.name} {...item} />
          ))}
        </div>

        <Form.Footer isLoading={methods.formState.isSubmitting || isPending} />
      </Form>
    </FormProvider>
  );
}
