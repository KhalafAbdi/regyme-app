import classNames from 'classnames/bind'

type ButtonProps = {
  label: string
  type?: string
  size?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const cx = classNames.bind({
  base: 'rounded-sm',
  primaryType: 'bg-gradient-to-br from-gray-800 to-gray-700 text-white',
  secondaryType: 'bg-gray-800 bg-opacity-5 underline',
  helperType: '',
  normalSize: 'px-3 py-1',
  mediumSize: 'px-5 py-2',
})

const Button = ({
  label,
  type = 'primary',
  size = 'normal',
  onClick,
}: ButtonProps) => {
  let buttonStyles = cx({
    base: true,
    primaryType: type === 'primary',
    secondaryType: type === 'secondary',
    helperType: type === 'helper',
    normalSize: size === 'normal',
    mediumSize: size === 'medium',
  })

  return (
    <button onClick={onClick} className={buttonStyles}>
      {label}
    </button>
  )
}

export default Button
