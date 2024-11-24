'use client'
import FormInput from './form/FormInput'

import { SubmitButton } from './form/Buttons'
import FormSelect from './form/FormSelect'

import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { redirect } from 'next/navigation'

// action = { createGeneralDataFormAction }

const GeneralDataForm = () => {
  const { toast } = useToast()

  const [message, formAction] = useFormState(getGeneralData, null)
  function getGeneralData(prevState: any, formData: FormData) {
    try {
      console.log('asd')
      console.log(Object.fromEntries(formData))
      toast({ description: 'success' })
      return 'user created'
    } catch (error) {
      console.log(error)
      return 'failed'
    }
  }

  useEffect(() => {
    if (message) {
      redirect('/new-analysis/levels')
    }
  }, [message])

  return (
    <section>
      {/* {message && <p>{message}</p>} */}
      <h1 className=' text-2xl font-semibold mb-8'>Општи подаци</h1>
      <div className='border p-8 rounded-md '>
        <form action={formAction}>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start '>
            <FormInput type='text' name='subject' label='Предмет' />
            <FormSelect label='Врста теста' name='typeOfTest' />
            <FormInput type='text' name='date' label='Датум' />
            <FormInput type='text' name='typeOfMark' label='Врста оцене' />
            <FormInput type='text' name='class' label='Разред' />
            <FormInput type='text' name='section' label='Одељење' />
            <FormInput
              type='number'
              name='numberOfStudents'
              label='Број ученика'
            />
            <FormInput
              type='number'
              name='numberOfStudentsWhoWorked'
              label='Број ученика који су радили'
            />
            <FormInput
              type='number'
              name='numberOfTasks'
              label='Број задатака'
            />
            <SubmitButton className='self-end  mb-2 h-10' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default GeneralDataForm
