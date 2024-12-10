import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type GeneralDataType = {
  subject: string
  date: string
  typeOfTest: string
  typeOfMark: string
  class: string
  section: string
  numberOfStudents: string
  numberOfStudentsWhoWorked: string
  numberOfTasks: string
}

const initialState: GeneralDataType = {
  subject: '',
  date: '',
  typeOfTest: '',
  typeOfMark: '',
  class: '',
  section: '',
  numberOfStudents: '',
  numberOfStudentsWhoWorked: '',
  numberOfTasks: '',
}

export const generalDataSlice = createSlice({
  name: 'generalData',
  initialState,
  reducers: {
    addGeneralData: (state, action: PayloadAction<GeneralDataType>) => {
      state = action.payload
      return state
    },
  },
})

export const { addGeneralData } = generalDataSlice.actions
export default generalDataSlice.reducer
