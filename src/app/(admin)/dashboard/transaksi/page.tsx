"use client";

import usePostTransaction from "@/lib/hooks/transaksi/usePostTransaction";
import { ShemaTransaction, TransactionShema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";

export default function Transaksi() {
  const { mutate, isPending } = usePostTransaction();
  
  const methods = useForm<ShemaTransaction>({
    resolver: zodResolver(TransactionShema),
  
    mode: 'onChange',
  });

  const onSubmit = (data: ShemaTransaction) => {
    const formData = new FormData();
    formData.append("customer_id", data.customer_id.toString());
    formData.append("admin_id", data.admin_id.toString());
    formData.append("amount", data.amount.toString());
    formData.append("type", data.type);

    mutate(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="border-b pb-4 space-y-2.5">
          <h2>Transaksi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            adipisci alias veritatis corporis velit doloremque sit! Id, totam
            tempore unde accusamus sed deleniti, minus saepe, voluptate
            recusandae explicabo iusto optio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-t">
          {InputNasabah.map((item) => (
            <Input
              key={item.name}
              {...item}
              type={item.type}
              isInvalid={Boolean(
                methods.formState.errors[item.name as keyof ShemaTransaction]
              )}
              errorMessage={
                methods.formState.errors[item.name as keyof ShemaTransaction]
                  ?.message
              }
              {...methods.register(item.name as keyof ShemaTransaction)}
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

/**
 * * Type field input.
 * - customer_id : number
 * - admin_id : number
 * - type : string| deposit | withdraw
 * - amount : number
 */

const InputNasabah = [
  {
    label: "Customer ID",
    name: "customer_id",
    type: "number",
  },
  {
    label: "Admin ID",
    name: "admin_id",
    type: "number",
  },
  {
    label: "Tipe Transaksi",
    name: "type",
    type: "text",
  },
  {
    label: "Jumlah Transaksi",
    name: "amount",
    type: "number",
  },
];
