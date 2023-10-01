import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type initialStateType = {
   activeMode: number
   input1: string
   input2: number | string
   operators: Array<string>
   flag: boolean
}
const initialState: initialStateType = {
   activeMode: 0,
   input1: '0',
   input2: '0',
   operators: ['/', '*', '+', '-'],
   flag: false
}
function calculate(a: number, b: number, c: string) {
   
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
      setInput1: (state, action: PayloadAction<string>) => {
         if (action.payload === '') {
            state.input1 = state.input1.slice(0, -1)
            state.input2 = '0'
            state.flag = false
         }
         else if (action.payload === 'Ac') {
            state.input1 = '0'
            state.input2 = '0'
            state.flag = false
         }
         else if (state.operators.includes(action.payload) && state.operators.includes(state.input1[state.input1.length - 1])) {
            state.input1 = state.input1.slice(0, - 1);
            state.input1 += action.payload;
         }
         else if (state.input1[0] === '0' && action.payload === '0' ||
         state.input1[state.input1.length - 1] === '0' && state.operators.includes(state.input1[state.input1.length - 2]) && action.payload === '0') {
            return;
         }
         else if (state.input1 === '0' && action.payload !== '.') {
            state.input1 = action.payload
         }
         else if (action.payload === '=' && state.flag) {
            if (state.input1.includes('.')) {
               state.input2 = eval(state.input1).toFixed(2);
            } else {
               state.input2 += eval(state.input1)
            }
         }
         else if (action.payload !== '=' && state.flag) {
            state.input2 = '0';
            state.flag = false;
            state.input1 += action.payload
         }
         else if(action.payload === '=') {
            if (state.input1.includes('.')) {
               state.input2 = eval(state.input1).toFixed(2)
               state.flag = true
            } else {
               state.input2 = eval(state.input1)
               state.flag = true
            } 
         } else {
            state.input1 += action.payload
         }
      },
      setInput2: (state, action: PayloadAction<string>) => {
         state.input2 += action.payload
      }
   }
})

export const { toggleMode, setInput2, setInput1 } = calcSlice.actions;
export default calcSlice.reducer;