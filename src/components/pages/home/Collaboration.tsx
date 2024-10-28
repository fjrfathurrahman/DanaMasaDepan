import { Icon } from '@/components/common/Import';
import { Layout } from '@/components/modules/import'
import { Resource } from '@/lib/resource';
import { Tooltip } from '@nextui-org/react';

export const Collaboration = () => {
  return (
    <Layout.Section bgSecondary>
      <Layout.Container sizing={['h-max']} spacing={['my-12']} className='dark:text-white text-black  text-center brightness-70'>

        <span>Kolaborasi dengan kami</span>

        <Layout.BoxFlex flexbox={['flex', 'flex-row', 'justify-center', 'gap-12']} className='mt-8 flex-wrap'>
          {Resource.dCollaboration.map((item) => (
            <Tooltip key={item.id} content={item.title} placement='bottom' classNames={{content: 'font-bold'}}>
              <Icon size='xl' icon={item.icon} />
            </Tooltip>
          ))}
        </Layout.BoxFlex>

      </Layout.Container>
    </Layout.Section>
  )
}
