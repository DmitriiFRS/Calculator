import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type initialStateType = {
   activeMode: number
}

const initialState: initialStateType = {
   activeMode: 0
}
const calcSlice = createSlice({
   name: 'calc',
   initialState,
   reducers: {
      toggleMode: (state) => {
         if (state.activeMode === 2) {
            state.activeMode = 0;
            return;
         }
         state.activeMode++
      },
   }
})

export const { toggleMode } = calcSlice.actions;
export default calcSlice.reducer;