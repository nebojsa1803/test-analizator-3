'use client'
import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Label } from '@/components/ui/label'

const FormRadioGroup = ({ label }: { label: string }) => {
  const [selectedOption, setSelectedOption] = useState('option-one')

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  return (
    <div className='flex flex-col justify-center items-center '>
      <Label htmlFor={label} className='mb-2 text-base leading-loose'>
        {label}
      </Label>
      <RadioGroup
        defaultValue='option-one'
        className='flex gap-1'
        name={label}
        required
      >
        <RadioGroupItem
          value='basic'
          className={`w-24 h-10 bg-muted border border-secondary rounded-md cursor-pointer ${
            selectedOption === 'basic' ? 'bg-primary text-white' : ''
          }`}
          onClick={() => handleOptionClick('basic')}
        >
          Основни
        </RadioGroupItem>
        <RadioGroupItem
          value='medium'
          className={`w-24 h-10 bg-muted border border-secondary rounded-md cursor-pointer ${
            selectedOption === 'medium' ? 'bg-primary text-white' : ''
          }`}
          onClick={() => handleOptionClick('medium')}
        >
          Средњи
        </RadioGroupItem>
        <RadioGroupItem
          value='advanced'
          className={`w-24 h-10 bg-muted border border-secondary rounded-md cursor-pointer ${
            selectedOption === 'advanced' ? 'bg-primary text-white' : ''
          }`}
          onClick={() => handleOptionClick('advanced')}
        >
          Напредни
        </RadioGroupItem>
      </RadioGroup>
    </div>
  )
}

export default FormRadioGroup
