import classNames from 'classnames/bind'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from './Button'

type TextLink = {
  text: string
  url: string
}

type ButtonLink = {
  button: string
  url: string
}

type ButtonFunction = {
  button: string
  fn: Function
}

type MenuListItemProps = {
  item: TextLink | ButtonLink | ButtonFunction
}

const MenuLink = ({ item }: MenuListItemProps): JSX.Element => {
  const router = useRouter()

  if ('text' in item && 'url' in item) {
    return textLink(item)
  }

  if ('button' in item && 'url' in item) {
    return <Button text={item.button} action={() => router.push(item.url)} />
  }

  if ('button' in item && 'fn' in item) {
    return <Button text={item.button} action={item.fn} />
  }

  return <></>
}

export default MenuLink

const textLink = ({ text, url }: TextLink) => {
  const router = useRouter()

  const cx = classNames.bind({
    base:
      'py-2 px-3 cursor-pointer hover:bg-gray-200 rounded hover:text-black w-full',
    active: 'bg-gray-50 border-l-4 border-blue-600 sm:border-0',
  })

  const isActive = router.asPath === url

  let className = cx({
    base: true,
    active: isActive,
  })

  return (
    <Link href={url}>
      <li className={className}>{text}</li>
    </Link>
  )
}
