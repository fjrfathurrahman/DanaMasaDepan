"use client";

import { AuthenticationShema, ShemaAuthentication } from "@/lib/schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { Layout } from "@/components/modules/import";
import { Form } from "@/components/fragments/Form";
import { Inputs } from "@/lib/resource";
import { Field } from "@/components/common/Import";
import useLoginAdmin from "@/lib/hooks/admin/useLoginAdmin";

export default function Authentication() {
  const { mutate, isPending } = useLoginAdmin();

  const methods = useForm<ShemaAuthentication>({
    resolver: zodResolver(AuthenticationShema),
    mode: "onChange",
  });

  const onSubmit = (data: ShemaAuthentication) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    mutate(formData);
  };

  return (
    <Layout.Container>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Form.Header>
            <h2>Welcome Admin</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci alias veritatis corporis velit doloremque
              sit! Id, totam tempore unde accusamus sed deleniti, minus saepe,
              voluptate recusandae explicabo iusto optio.
            </p>
          </Form.Header>

          <div className="flex flex-col gap-4 py-8 border-t">
            {Inputs.Login.map((item) => (
              <Field key={item.name} {...item} />
            ))}
          </div>

          <Form.Footer isLoading={isPending || methods.formState.isSubmitting}>
            <Button variant="flat">Kembali Ke Home</Button>
          </Form.Footer>
        </Form>
      </FormProvider>
    </Layout.Container>
  );
}
