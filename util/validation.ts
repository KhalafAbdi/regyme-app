type ValidationProps = {
  required?: string
  pattern?: {
    value: RegExp
    message: string
  }
  minLength?: {
    value: number
    message: string
  }
  maxLength?: {
    value: number
    message: string
  }
}

export const nameRequirements = (): ValidationProps => {
  return {
    required: 'Enter your Name',
    minLength: {
      value: 2,
      message: 'name has to be atleast 8 characters',
    },
    maxLength: {
      value: 20,
      message: 'name has to be less than 20 characters',
    },
  }
}

export const emailRequirements = (): ValidationProps => {
  return {
    required: 'Enter your e-mail',
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      message: 'Enter a valid e-mail address',
    },
  }
}

export const passwordRequirements = (): ValidationProps => {
  return {
    required: 'Enter your password',
    minLength: {
      value: 8,
      message: 'Password has to be atleast 8 characters',
    },
    maxLength: {
      value: 20,
      message: 'Password has to be less than 20 characters',
    },
  }
}
