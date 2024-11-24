import { redirect } from 'next/navigation'
import { generalDataSchema } from './schemas'

export const createGeneralDataFormAction = async (
  prevState: any,
  formData: FormData
) => {
  'use server'
  try {
    const rawData = Object.fromEntries(formData)
    // const validatedFields = generalDataSchema.parse(rawData)
    const { numberOfStudents, numberOfStudentsWhoWorked, numberOfTasks } =
      rawData
    const convertedNumberTypedFields = {
      ...rawData,
      numberOfStudents: Number(numberOfStudents),
      numberOfStudentsWhoWorked: Number(numberOfStudentsWhoWorked),
      numberOfTasks: Number(numberOfTasks),
    }
    const validatedFields = generalDataSchema.parse(convertedNumberTypedFields)

    console.log(validatedFields)

    return { message: 'Подаци су успешно унети' }
  } catch (error) {
    console.log(error)
    return { message: 'Догодила се грешка...' }
  }
}
