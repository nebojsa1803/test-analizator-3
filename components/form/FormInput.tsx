import { Label } from '../ui/label'
import { Input } from '../ui/input'

type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  min?: number
  max?: number
}

const FormInput = (props: FormInputProps) => {
  const { label, name, type, defaultValue, min, max } = props
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className='h-10'
        min={min}
        max={max}
        required
      />
    </div>
  )
}

export default FormInput
