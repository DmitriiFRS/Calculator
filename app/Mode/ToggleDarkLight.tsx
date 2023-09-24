"use client"

import { useDispatch, useSelector } from 'react-redux'
import '../globals.css'
import { RootState } from '../Redux/store'
import {toggleMode} from '../Redux/calcSlice';
const inputs = [0,1,2]
function ToggleDarkLightRemix() {
   const dispatch = useDispatch();
   const activeInput = useSelector((state: RootState) => state.calcReducer.activeMode);
   function toggleInput() {
      dispatch(toggleMode());
   }
return (
   <div className='tri-stage flex justify-center'>
      {inputs.map((el, index) => {
         return (
            <input onClick={toggleInput} key={index} type="radio" className={`toggle ${index == activeInput ? 'visibleEl' : 'hiddenEl'}`} />
         )
      })}
   </div>
)
}
export default ToggleDarkLightRemix;