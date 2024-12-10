'use client'
import { SubmitButton } from '@/components/form/Buttons'
import FormRadioGroup from '@/components/form/FormRadioGroup'
import type { Levels } from '@/app/(features)/levelsDataSlice'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { redirect } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { addTasksLevels } from '@/app/(features)/levelsDataSlice'

//  redirect('/new-analysis/levels')

const LevelsPage = () => {
  const { numberOfTasks } = useAppSelector((state) => state.generalData)
  const dispatch = useAppDispatch()
  const tasksNumber = Number(numberOfTasks)
  const { toast } = useToast()
  const [message, formAction] = useFormState(getLevelsData, null)

  const createTaskArray = (numOfTasks: number) =>
    Array.from({ length: numOfTasks }, (_, i) => `${i + 1}. задатак`)

  const taskArray = createTaskArray(tasksNumber)

  function getLevelsData(prevState: any, formData: FormData) {
    try {
      const levelsFormValues = Object.fromEntries(formData) as Levels
      dispatch(addTasksLevels(levelsFormValues))
      toast({ description: 'success' })
      return 'levels filled'
    } catch (error) {
      console.log(error)
      return 'failed'
    }
  }

  useEffect(() => {
    if (message) {
      redirect('/new-analysis/student-1')
    }
  }, [message])

  return (
    <section className='border p-8 rounded-md '>
      <form action={formAction}>
        <div className='grid gap-4 md:grid-cols-2  2xl:grid-cols-3 items-start '>
          {taskArray.map((task) => (
            <FormRadioGroup key={task} label={task} />
          ))}
          <div className=' flex justify-center self-end'>
            <SubmitButton className='w-72 mt-2' />
          </div>
        </div>
      </form>
    </section>
  )
}

export default LevelsPage
