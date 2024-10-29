"use client";

import { AuthenticationShema, ShemaAuthentication } from "@/lib/schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { Layout } from "@/components/modules/import";
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
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="max-w-[640px] mx-auto"
        >
          <div className="border-b pb-4 space-y-2.5">
            <h2>Welcome Admin</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci alias veritatis corporis velit doloremque
              sit! Id, totam tempore unde accusamus sed deleniti, minus saepe,
              voluptate recusandae explicabo iusto optio.
            </p>
          </div>

          <div className="flex flex-col gap-4 py-8 border-t">
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              placeholder="Masukan Nama Anda"
              isInvalid={Boolean(methods.formState.errors.name)}
              errorMessage={methods.formState.errors.name?.message}
              {...methods.register("name")}
            />

            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Masukan Email"
              isInvalid={Boolean(methods.formState.errors.email)}
              errorMessage={methods.formState.errors.name?.message}
              {...methods.register("email")}
            />

            <Input
              type="password"
              label="Password"
              labelPlacement="outside"
              placeholder="Masukan Password"
              isInvalid={Boolean(methods.formState.errors.password)}
              errorMessage={methods.formState.errors.password?.message}
              {...methods.register("password")}
            />
          </div>

          <div className="*:w-full *:font-semibold space-y-2.5">
            <Button
              type="submit"
              color="primary"
              variant="solid"
              isLoading={methods.formState.isSubmitting || isPending}
              disabled={methods.formState.isSubmitting || isPending}
            >
              {methods.formState.isSubmitting || isPending
                ? "Loading..."
                : "Submit"}
            </Button>
            <Button variant="flat">
              Kembali Ke Home 
            </Button>
          </div>

        </form>
      </FormProvider>
    </Layout.Container>
  );
}
