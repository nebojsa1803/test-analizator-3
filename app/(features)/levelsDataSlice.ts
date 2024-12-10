import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type DifficultyLevel = 'basic' | 'medium' | 'advanced'

export type Levels = {
  [key: string]: DifficultyLevel
}

const initialState: Levels = {}

export const levelsDataSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    addTasksLevels: (state, action: PayloadAction<Levels>) => {
      state = action.payload
      return state
    },
  },
})

export const { addTasksLevels } = levelsDataSlice.actions
export default levelsDataSlice.reducer
