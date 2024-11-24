import * as z from 'zod'
import { ZodSchema } from 'zod'

export const generalDataSchema = z.object({
  subject: z.string().min(1, { message: 'Минимална дужина уноса је 2' }),
  typeOfTest: z.string().min(1, { message: 'Минимална дужина уноса је 2' }),
  date: z.string().min(1, { message: 'Минимална дужина уноса је 2' }),
  typeOfMark: z.string().min(1, { message: 'Минимална дужина уноса је 2' }),
  class: z.string().min(1, { message: 'Минимална дужина уноса је 2' }),
  section: z.string().min(1, { message: 'Минимална дужина уноса је 2' }),
  // numberOfStudents: z.coerce
  //   .number()
  //   .int()
  //   .min(1, { message: 'Вредност мора бити природан број' }),
  numberOfStudents: z
    .number()
    .min(1, { message: 'Вредност мора бити природан број' }),
  numberOfStudentsWhoWorked: z
    .number()
    .min(1, { message: 'Вредност мора бити природан број' }),
  numberOfTasks: z
    .number()
    .min(1, { message: 'Вредност мора бити природан број' }),
})
