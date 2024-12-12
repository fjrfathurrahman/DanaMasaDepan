"use client";

import Field from "@/components/common/Field";
import usePostTransaction from "@/lib/hooks/transaksi/usePostTransaction";
import { Form } from "@/components/fragments/Form";
import { Inputs } from "@/lib/resource";
import { ShemaTransaction, TransactionShema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { RowCostumersProps } from "@/lib/types/Types";

export default function Transaksi() {
  const methods = useForm<ShemaTransaction>({resolver: zodResolver(TransactionShema),mode: "onChange",});
  const { data: dataNasabah } = useGetNasabah()
  const { mutate, isPending } = usePostTransaction(methods.reset);

  const onSubmit = (data: ShemaTransaction) => {
    const formData = new FormData();
    formData.append("customer_id", data.customer_id.toString());
    formData.append("admin_id", localStorage.getItem("adminId")!);
    formData.append("amount", data.amount.toString());
    formData.append("type", data.type);

    mutate(formData);
  };

  const getNasbahOptions = () => {
    return dataNasabah?.map((item: RowCostumersProps) => ({
      key: item.id,
      label: `${item.name} - ${item.class} ${item.major}`,
    })) || [];
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Header>
          <h2>Transaksi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            adipisci alias veritatis corporis velit doloremque sit! Id, totam
            tempore unde accusamus sed deleniti, minus saepe, voluptate
            recusandae explicabo iusto optio.
          </p>
        </Form.Header>

        <div className="grid grid-cols-1 gap-4 py-4">
          <Field
            name="customer_id"
            label="Pilih Nasabah"
            placeholder="Pilih nasabah..."
            element="select"
            dynamicOptionsFetcher={getNasbahOptions}
          />
          
          {Inputs.Transaksi.map((item) => (
            <Field key={item.name} {...item} />
          ))}
        </div>

        <Form.Footer isLoading={isPending || methods.formState.isSubmitting} />
      </Form>
    </FormProvider>
  );
}

