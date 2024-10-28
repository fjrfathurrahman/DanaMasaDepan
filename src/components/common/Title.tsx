import { Layout } from "../modules/import"

const Title = ({text}: { text?: string, children?: React.ReactNode }) => {
  return (
    <Layout.BoxFlex spacing={['py-8']} flexbox={['flex', 'items-center', 'gap-8']}>
      <h3 className="sm:min-w-max">{text}</h3>
      <div className="w-full h-0.5 bg-gray-700 hidden sm:block" />
    </Layout.BoxFlex>
  )
}

export default Title