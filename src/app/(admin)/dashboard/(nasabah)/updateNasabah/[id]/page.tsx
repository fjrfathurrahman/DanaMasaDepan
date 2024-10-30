'use client'

import Field from "@/components/common/Field";
import { Form } from "@/components/fragments/Form";
import useUpdateNasabah from "@/lib/hooks/nasabah/useUpdateNasabah";
import { Inputs } from "@/lib/resource";
import { CostumerShema, ShemaCostumer } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function UpdateNasabah({ params }: { params: { id: string } }) {
  const methods = useForm<ShemaCostumer>({
    resolver: zodResolver(CostumerShema),
    mode: "onChange",
  });

  const { mutate, isPending } = useUpdateNasabah();

  const onSubmit = (data: ShemaCostumer) => {
    const formData = new FormData();

    formData.append('_method', 'PUT');
    formData.append("nisn", data.nisn);
    formData.append("name", data.name);
    formData.append("gender", data.gender);
    formData.append("major", data.major);
    formData.append("class", data.class);
    formData.append("address", data.address);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    mutate({id: params.id, formData});
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-t">
          {Inputs.Nasabah.map((item) => (
            <Field key={item.name} {...item} />
          ))}
        </div>

        <Form.Footer isLoading={methods.formState.isSubmitting || isPending} />
      </Form>
    </FormProvider>
  );
}
