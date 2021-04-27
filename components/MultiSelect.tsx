import Select from 'react-select'

const customStyles = {
  control: (base: any) => ({
    ...base,
    background: '#F9FAFB',
    borderRadius: 0,
    borderColor: 'transparent',
    boxShadow: null,
    '&:hover': {},
    '&:focus': {
      borderColor: 'transparent',
    },
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base: any) => ({
    ...base,
    padding: 0,
  }),
}

const CustomSelect = ({ options, name, ...rest }) => {
  const newOptions = options?.map((item) => {
    return {
      value: { ...item },
      label: item.name,
    }
  })

  return (
    <div>
      <span>Test</span>
      <Select
        styles={customStyles}
        options={newOptions}
        isMulti
        name={name}
        {...rest}
      />
    </div>
  )
}

export default CustomSelect
