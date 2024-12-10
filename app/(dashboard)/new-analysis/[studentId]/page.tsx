'use client'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { SubmitButton } from '@/components/form/Buttons'
import FormInput from '@/components/form/FormInput'
import { useToast } from '@/hooks/use-toast'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { addClassResaults } from '@/app/(features)/pointsAndMarkSlice'

const StudentId = ({ params }: { params: { studentId: string } }) => {
  const dispatch = useAppDispatch()
  const partsOfParams = params.studentId.split('-')
  const nextStudentNumber = Number(
    parseInt(partsOfParams[partsOfParams.length - 1]) + 1
  )

  const { toast } = useToast()
  const [message, formAction] = useFormState(getStudentResault, null)

  function getStudentResault(prevState: any, formData: FormData) {
    try {
      const currentStudentResault = Object.fromEntries(formData)
      console.log(Object.fromEntries(formData))
      dispatch(addClassResaults(currentStudentResault))
      toast({ description: 'success' })
      return 'individual resault'
    } catch (error) {
      console.log(error)
      return 'failed'
    }
  }

  const { numberOfStudentsWhoWorked, numberOfTasks } = useAppSelector(
    (state) => state.generalData
  )

  const createTaskArray = (numOfTasks: string) => {
    const taskNumber = Number(numOfTasks)
    return Array.from({ length: taskNumber }, (_, i) => `${i + 1}. задатак`)
  }

  useEffect(() => {
    if (message && nextStudentNumber <= Number(numberOfStudentsWhoWorked)) {
      redirect(`/new-analysis/student-${nextStudentNumber}`)
    } else if (
      message &&
      nextStudentNumber > Number(numberOfStudentsWhoWorked)
    ) {
      redirect('/resault')
    }
  }, [message])
  const taskArray = createTaskArray(numberOfTasks)
  return (
    <section>
      <h1 className='text-4xl'>ID: {params.studentId}</h1>
      <div className='border p-8 rounded-md'>
        <form action={formAction}>
          <div className='grid gap-4 my-element sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-start '>
            {taskArray.map((task) => (
              <FormInput
                key={task}
                type='number'
                min={0}
                max={1}
                name={task}
                label={task}
              />
            ))}
            <FormInput type='number' name='mark' label='Оцена' />
            <SubmitButton className='self-end  mb-2 h-10' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default StudentId
