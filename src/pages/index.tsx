import type { NextPage } from 'next'
import { withAuth } from '@app/hooks/withAuth'

const Home: NextPage = () => {
  return <div className="">Hello admin</div>
}

export const getServerSideProps = withAuth(() => { return { props: {}}})

export default Home
