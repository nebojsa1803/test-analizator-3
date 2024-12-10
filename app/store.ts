import { configureStore } from '@reduxjs/toolkit'
import generalDataReducer from './(features)/generalDataSlice'
import levelsDataReducer from './(features)/levelsDataSlice'
import pointsAndMarkDataReducer from './(features)/pointsAndMarkSlice'

export const store = configureStore({
  reducer: {
    generalData: generalDataReducer,
    levels: levelsDataReducer,
    pointsAndMark: pointsAndMarkDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
