import { Label } from '../ui/label'
import { Input } from '../ui/input'

type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
}

const FormInput = (props: FormInputProps) => {
  const { label, name, type, defaultValue } = props
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className='h-10'
        required
      />
    </div>
  )
}

export default FormInput
