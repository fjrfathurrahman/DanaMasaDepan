"use client";

import Field from "@/components/common/Field";
import usePostNasabah from "@/lib/hooks/nasabah/usePostNasabah";
import { Form } from "@/components/fragments/Form";
import { Inputs } from "@/lib/resource";
import { CostumerShema, ShemaCostumer } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function TambahNasabah() {
  const { mutate, isPending } = usePostNasabah();

  const methods = useForm<ShemaCostumer>({
    resolver: zodResolver(CostumerShema),
    mode: "onChange",
  });

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
          <h2>Tambah Nasabah</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            adipisci alias veritatis corporis velit doloremque sit! Id, totam
            tempore unde accusamus sed deleniti, minus saepe, voluptate
            recusandae explicabo iusto optio.
          </p>
        </Form.Header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-t">
          {Inputs.Nasabah.map((item) => (
            <Field key={item.name} {...item} />
          ))}
        </div>

        <Form.Footer isLoading={isPending || methods.formState.isSubmitting} />
      </Form>
    </FormProvider>
  );
}
