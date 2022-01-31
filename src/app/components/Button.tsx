import { FC } from 'react'
import classNames from 'classnames'

interface Props {
  onClick?: () => void
  primary?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<Props> = ({ children, onClick, primary, type }) => (
  <button
    type={type ?? 'button'}
    className={classNames(
      'font-bold py-2 px-4 border-2 hover:opacity-50 transition duration-200 ease-in-out',
      {
        'text-white bg-neon border-transparent shadow-highlight': !!primary,
        'border-gray-800 text-gray-800': !primary,
      },
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button