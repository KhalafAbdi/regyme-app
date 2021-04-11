import classNames from 'classnames/bind'

type InputProps = {
  first?: boolean
  label: string
  placeholder?: string
  children?: JSX.Element
  type?: string
  inputRef: any
  errors?: any
}

const inputClasses = classNames.bind({
  base: 'mt-1 bg-gray-50 h-10 border border-gray-200 rounded px-4',
  error: 'border-red-600',
})

const labelClasses = classNames.bind({
  base: 'font-semibold',
  error: 'text-red-600',
})

const TextInput = ({
  label,
  placeholder,
  children,
  inputRef,
  type,
  errors,
}: InputProps): JSX.Element => {
  const inputClassName = inputClasses({
    base: true,
    error: errors?.message,
  })

  const labelClassName = labelClasses({
    base: true,
    error: errors?.message,
  })

  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-between">
        <span className={labelClassName}>{label}</span>
        {children}
      </div>
      <input
        className={inputClassName}
        type={type || 'text'}
        placeholder={placeholder}
        name={label.toLowerCase()}
        {...inputRef}
      />
      {errors && <span className="text-red-600">{errors.message}</span>}
    </div>
  )
}

export default TextInput
