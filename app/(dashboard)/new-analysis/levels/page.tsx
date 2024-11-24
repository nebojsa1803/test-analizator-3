'use client'
import { SubmitButton } from '@/components/form/Buttons'
import FormRadioGroup from '@/components/form/FormRadioGroup'

import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { redirect } from 'next/navigation'

const LevelsPage = () => {
  const { toast } = useToast()
  const [message, formAction] = useFormState(getLevelsData, null)

  function getLevelsData(prevState: any, formData: FormData) {
    try {
      console.log('asd')
      console.log(Object.fromEntries(formData))
      toast({ description: 'success' })
      return 'levels filled'
    } catch (error) {
      console.log(error)
      return 'failed'
    }
  }

  useEffect(() => {
    if (message) {
      redirect('/')
    }
  }, [message])

  return (
    <section className='border p-8 rounded-md '>
      <form action={formAction}>
        <div className='grid gap-4 md:grid-cols-2  2xl:grid-cols-3 items-start '>
          <FormRadioGroup />
          <FormRadioGroup />
          <FormRadioGroup />
          <FormRadioGroup />
          <FormRadioGroup />
          <FormRadioGroup />
          <div className=' flex justify-center self-end'>
            <SubmitButton className='w-72 mt-2' />
          </div>
        </div>
      </form>
    </section>
  )
}

export default LevelsPage
