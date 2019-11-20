export default {
  control: (provided, state) => ({
    ...provided,
    '&:hover': { borderColor: 'var(--color--body-alt)' },
    boxShadow: 'none',
    transition: 'none',
    border: '1px solid var(--color--body-alt)',
    borderRadius: '2px',
    backgroundColor: state.isFocused ? 'var(--color--tertiary)' : 'var(--color--body-background)'
  }),
  valueContainer: (provided) => ({
    ...provided,
    fontSize: '1rem',
    fontWeight: 'var(--font-weight--primary-regular)',
    lineHeight: 'var(--spacing)',
    padding: 'calc(var(--spacing) * 0.5)'
  }),
  menu: () => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    borderRadius: '2px',
    border: '1px solid var(--color--tertiary)',
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 20px 32px -8px',
    backgroundColor: 'var(--color--body-background)',
    overflow: 'hidden',
    zIndex: 999
  }),
  option: (provided, state) => {
    let color = 'var(--color--body)'
    if (state.isFocused) {
      color = 'var(--color--primary)'
    }

    if (state.isSelected) {
      color = 'var(--color--secondary)'
    }

    return {
      ...provided,
      ':active': { backgroundColor: 'var(--color--body-background)' },
      backgroundColor: "var(--color--body-background)",
      border: 'none',
      padding: 'calc(var(--spacing) * 0.25) calc(var(--spacing) * 0.5)',
      color
    }
  },
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'var(--color--body-background)'
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'var(--color--body)',
    fontSize: '0.75rem',
    lineHeight: 1.5,
    padding: '0 2px 0 0',
    margin: 0
  }),
  singleValue: () => ({}),
  input: () => ({}),
  clearIndicator: (provided) => ({
    ...provided,
    ':hover': { color: 'var(--color--body)' },
    color: 'var(--color--body-alt)',
    transition: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    ':hover': { color: 'var(--color--body)' },
    color: 'var(--color--body)',
    transition: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}