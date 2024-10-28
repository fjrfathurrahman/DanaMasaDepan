"use client";

import usePostNasabah from "@/lib/hooks/nasabah/usePostNasabah";
import { CostumerShema, ShemaCostumer } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
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
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="border-b pb-4 space-y-2.5">
            <h2>Tambah Nasabah</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci alias veritatis corporis velit doloremque
              sit! Id, totam tempore unde accusamus sed deleniti, minus saepe,
              voluptate recusandae explicabo iusto optio.
            </p>
          </div>

          <div className="flex flex-col gap-4 py-8 border-t">
            {InputNasabah.map((item) => (
              <Input
                key={item.name}
                {...item}
                isInvalid={Boolean(methods.formState.errors[item.name as keyof ShemaCostumer])}
                errorMessage={methods.formState.errors[item.name as keyof ShemaCostumer]?.message}
                {...methods.register(item.name as keyof ShemaCostumer)}
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

const InputNasabah = [
  {
    label: "NISN",
    name: "nisn",
    type: "text",
    placeholder: "Masukan NISN Anda",
  },
  {
    label: "Nama",
    name: "name",
    type: "text",
    placeholder: "Masukan Nama Anda",
  },
  {
    label: "Jenis Kelamin",
    name: "gender",
    type: "text",
    placeholder: "Masukan Jenis Kelamin Anda",
  },
  {
    label: "Jurusan",
    name: "major",
    type: "text",
    placeholder: "Masukan Jurusan Anda",
  },
  {
    label: "kelas",
    name: "class",
    type: "text",
    placeholder: "Masukan Kelas Anda",
  },
  {
    label: "Alamat",
    name: "address",
    type: "text",
    placeholder: "Masukan Alamat Anda",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "Masukan Email Anda",
  },
  {
    label: "Nomor Telepon",
    name: "phone",
    type: "text",
    placeholder: "Masukan Nomor Telepon Anda",
  },
];
