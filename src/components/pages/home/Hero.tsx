'use client';

import Image from "next/image";
import { Layout, AnimationList, AnimationVertical } from "@/components/modules/import";
import { Resource } from "@/lib/resource";
import { Button } from "@nextui-org/react";
import { Icon } from "@/components/common/Import";
import Link from "next/link";

export const Hero = (): JSX.Element => {

  return (
    <Layout.Container spacing={['py-28']}>

      <Layout.BoxGrid className="">
        <AnimationList className="order-2 lg:order-1">
          <span className="text-base sm:text-xl tracking-wider">Tabungan Masa Depan</span>
          <h1 className="font-bold tracking-tight">
            Wujudkan <br className="sm:hidden" /> Impian <br className="hidden sm:block lg:hidden" /> Anda <span className="md:text-nowrap">dengan Mudah!</span>
          </h1>
          <p>
            Ciptakan rencana keuangan Anda dengan aman dan mudah. Website kami
            membantu Anda mengelola dan mengembangkan tabungan untuk mencapai tujuan
            finasial Anda✨
          </p>
          <Layout.BoxFlex flexbox={['flex', 'flex-col', 'sm:flex-row', 'gap-4']} spacing={'my-4'}>
            <Button startContent={<Icon icon={Resource.dIcons.search}/>} color="primary" size="lg" variant="solid" className="w-full font-semibold">
              <Link href="/search">CARI NASABAH</Link>
            </Button>
            <Button startContent={<Icon icon={Resource.dIcons.dashboard}/>}  color="primary" size="lg" variant="bordered" className="w-full font-semibold">
              <Link href="/dashboard">DASHBOARD</Link>
            </Button>
          </Layout.BoxFlex>
        </AnimationList>

          <AnimationVertical className="order-1 lg:order-2 mx-auto">
            <Image src={Resource.dImage.HERO} alt="image" quality={100} height={450} className="select-none" />
          </AnimationVertical>

      </Layout.BoxGrid>
      
    </Layout.Container>
  );
};
