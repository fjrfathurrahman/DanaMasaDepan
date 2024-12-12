"use client";

import Field from "@/components/common/Field";
import axios from "axios";
import { Form } from "@/components/fragments/Form";
import { Layout } from "@/components/modules/import";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsShema, ShemaContactUs } from "@/lib/schema";
import { Inputs } from "@/lib/resource";

export const ContactForm = () => {
  const methods = useForm<ShemaContactUs>({
    resolver: zodResolver(ContactUsShema),
    mode: "onChange",
  });

  const onSubmit = async (data: ShemaContactUs) => {
    const formData = new FormData();

    formData.append('access_key', process.env.NEXT_PUBLIC_WEBFORMS_API_KEY ?? '');
    formData.append("subject", data.subject);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await axios.post('https://api.web3forms.com/submit', formData)

    if (response) {
      console.log(response)
    }
  };

  return (
    <Layout.Container>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Form.Header>
            <h4>Ada yang ingin anda tanyakan?</h4>
            <p>Silahkan isi form di bawah ini, untuk jika anda memiliki pertanyaan</p>
          </Form.Header>

          <div className="flex flex-col gap-4">
            {Inputs.Contact.map((item) => (
              <Field key={item.name} {...item} />
            ))}
          </div>

          <Form.Footer isLoading={methods.formState.isSubmitting} size="lg" />
        </Form>
      </FormProvider>
    </Layout.Container>
  );
};
