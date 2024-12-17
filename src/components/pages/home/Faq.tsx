"use client";

import { Title } from "@/components/common/Import";
import { Layout } from "@/components/modules/import";
import { Resource } from "@/lib/resource";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowBack } from "react-icons/io";

export const Faq = () => {
  return (
    <Layout.Section className="dark:bg-darkSecondary bg-lightSecondary">
      <Layout.Container sizing={["h-max"]}>
        <Title text="Informasi dan Pertanyaan Umum" />

        <Accordion defaultExpandedKeys={["2"]} variant="light">
          {Resource.dFaq.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={`FAQ ${item.id}`}
              title={item.title}
              indicator={<IoIosArrowBack size={28} />}
            >
              {item.desc}
            </AccordionItem>
          ))}
        </Accordion>
      </Layout.Container>
    </Layout.Section>
  );
};
