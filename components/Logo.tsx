import classNames from 'classnames/bind'
import Link from 'next/link'

type LogoProps = {
  size?: string
}

const styles = {
  base: 'font-semibold leading-none',
  small: 'text-xl',
  medium: 'text-2xl',
  big: 'text-3xl',
}

const Logo = ({ size }: LogoProps): JSX.Element => {
  const cx = classNames.bind(styles)

  let className = cx({
    base: true,
    small: size === 'small',
    medium: size === 'medium',
    big: size === 'big',
  })

  return (
    <Link href="/">
      <a className={className}>Regyme</a>
    </Link>
  )
}

export default Logo
