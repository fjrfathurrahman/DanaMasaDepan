"use client";

import Field from "@/components/common/Field";
import usePostNasabah from "@/lib/hooks/nasabah/usePostNasabah";
import { Form } from "@/components/fragments/Form";
import { Inputs } from "@/lib/resource";
import { CostumerShema, ShemaCostumer } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function TambahNasabah() {
  const methods = useForm<ShemaCostumer>({ resolver: zodResolver(CostumerShema), mode: "onChange" });
  const { mutate, isPending } = usePostNasabah(methods.reset);

  const onSubmit = (data: ShemaCostumer) => {
    const formData = new FormData();
    formData.append("nisn", data.nisn);
    formData.append("name", data.name);
    formData.append("gender", data.gender);
    formData.append("major", data.major);
    formData.append("class", data.class);
    formData.append("address", data.address);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    mutate(formData);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Header>
          <h2>Menambah Admin</h2>
          <p>
            Halaman ini memungkinkan Anda untuk memasukkan informasi baru untuk
            nasabah dalam sistem. Formulir yang disediakan dirancang untuk
            mengumpulkan data penting yang diperlukan untuk pendaftaran nasabah,
          </p>
        </Form.Header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {Inputs.Nasabah.map((item) => <Field key={item.name} {...item} />)}
        </div>

        <Form.Footer isLoading={isPending || methods.formState.isSubmitting} />
      </Form>
    </FormProvider>
  );
}
