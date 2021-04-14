import classNames from 'classnames/bind'
import Link from 'next/link'
import { useRouter } from 'next/router'

type MenuListItemProps = {
  item: {
    text?: string
    button?: string
    url: string
  }
}

const MenuLink = ({ item }: MenuListItemProps): JSX.Element => {
  const router = useRouter()

  const cx = classNames.bind({
    base: 'py-2 px-3',
    active: 'bg-gray-50 border-l-4 border-blue-600 sm:border-0',
  })

  const isActive = router.asPath === item.url

  let className = cx({
    base: true,
    active: isActive,
  })

  return (
    <>
      {item.text && (
        <Link href={item.url}>
          <li className={className}>{item.text}</li>
        </Link>
      )}
      {item.button && (
        <button
          onClick={() => router.push(item.url)}
          className="bg-blue-600 px-3 py-2 rounded text-gray-50 w-full text-center sm:w-auto focus:outline-none"
        >
          {item.button}
        </button>
      )}
    </>
  )
}

export default MenuLink
