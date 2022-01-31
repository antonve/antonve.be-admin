import {FC} from 'react'

const Layout: FC<{}> = ({children}) => (
  <div className="mb-8">
    <header
      className={`bg-grey-lightest border-t-4 border-gray-200 hero-background p-10 flex justify-between`}
    >
      <h1 className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
        antonve.be
      </h1>
    </header>
    <div className="px-10">{children}</div>
  </div>
)

export default Layout
