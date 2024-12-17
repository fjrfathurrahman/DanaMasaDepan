import Link from "next/link";
import { Icon } from "../common/Import";
import { Layout } from "../modules/import";
import { Resource } from "@/lib/resource";
import { IconType } from "react-icons";

export const Footer = () => {
  return (
    <Layout.Section bg="bg-dark" className="text-white">
      <Layout.Container sizing={"h-max"}>
        <Layout.BoxGrid>
          <Header />
          <Body />
        </Layout.BoxGrid>

        <Copyright />
      </Layout.Container>
    </Layout.Section>
  );
};


const Header = () => (
  <Layout.BoxFlex>
    <h3 className="text-blue-500">Dana Masa Depan</h3>
    <p className="text-paragraphDark">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      provident suscipit illum quos nostrum eos nemo dignissimos, culpa facere
      odit deserunt! Repudiandae accusantium sed numquam ullam obcaecati quo
      sint, maxime voluptates corporis pariatur, amet facere quaerat accusamus
      nobis odit officia.
    </p>
  </Layout.BoxFlex>
);

const Body = () => (
  <Layout.BoxGrid grid={['grid', 'sm:grid-cols-2', 'gap-8']}>
    <Layout.BoxFlex>
      <h6>Useful Links</h6>
      <RenderItems data={Resource.dMenu.links} element={'Text'} />
    </Layout.BoxFlex>

    <Layout.BoxFlex>
      <h6>Services</h6>
      <RenderItems data={Resource.dMenu.Services} element={'Text'} />
    </Layout.BoxFlex>
  </Layout.BoxGrid>
);

export const Copyright = () => (
  <Layout.BoxFlex flexbox={["flex", "justify-between", "md:items-center", "flex-col-reverse", "md:flex-row", "gap-4"]} className="border-t pt-12 mt-12">
    <span>Copyright {new Date().getFullYear()} Dana Masa Depan - All rights reserved.</span>
    <Layout.BoxFlex flexbox={["flex", "flex-row", "gap-4"]}>
      <RenderItems data={Resource.dSosmed} element={'Icon'} />
    </Layout.BoxFlex>
  </Layout.BoxFlex>
);


const RenderItems = ({data, element}: { data: {id?: number, title?: string, href: string, icon?: IconType}[], element?: 'Icon' | 'Text' })  => {
  return (
    <>
      {data.map((item) => (
        <Link key={item.id} href={item.href} passHref target="_blank">
          {element === 'Icon' ? <Icon size="md" icon={item.icon as IconType} /> : element === 'Text' ? (
            <p className="text-paragraphDark">{item.title}</p>
          ): null }
        </Link>
      ))}
    </>
  )
}