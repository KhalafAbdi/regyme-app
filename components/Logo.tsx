import classNames from 'classnames/bind'

type LogoProps = {
  size?: string
}

const styles = {
  base: 'font-semibold',
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

  return <span className={className}>Regyme</span>
}

export default Logo
