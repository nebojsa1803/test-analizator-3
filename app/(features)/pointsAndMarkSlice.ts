import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type PointsAndMarkType = {
  classResault: (string | number)[][]
}

const initialState: PointsAndMarkType = {
  classResault: [],
}

export const pointsAndMarkSlice = createSlice({
  name: 'pointsAndMark',
  initialState,
  reducers: {
    addClassResaults: (state, action) => {
      const newResault = action.payload
      if (!state.classResault.length) {
        state.classResault = [newResault]
        return state
      } else {
        state.classResault.push(newResault)
        return state
      }
    },
  },
})

export const { addClassResaults } = pointsAndMarkSlice.actions
export default pointsAndMarkSlice.reducer
