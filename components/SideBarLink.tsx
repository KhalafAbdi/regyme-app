import Link from 'next/link'
import classNames from 'classnames/bind'
import { useRouter } from 'next/router'

interface Props {
  url: string
  children: React.ReactNode
}

const SideBarLink: React.FC<Props> = ({ url, children }) => {
  const router = useRouter()

  const cx = classNames.bind({
    base: 'px-3 py-2 cursor-pointer flex items-center text-white',
    active: 'bg-gray-800',
    hover: 'hover:bg-blue-600',
  })

  const isActive = router.asPath === url

  let className = cx({
    base: true,
    active: isActive,
    hover: !isActive,
  })

  return (
    <Link href={url}>
      <li className={className}>{children}</li>
    </Link>
  )
}

export default SideBarLink
