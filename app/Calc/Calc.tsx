"use client"
import { useSelector } from 'react-redux';
import '../globals.css';
import Buttons from './Buttons';
import Result from './Result';
import { RootState } from '../Redux/store';

function Calc() {
   const mode = useSelector((state: RootState) => state.calcReducer.activeMode)
return (
   <section className='calc'>
      <div className={`${mode === 1 ? 'calcInterface__b' : mode === 2 ? 'calcInterface__r' : 'calcInterface'} flex flex-col`}>
         <Result />
         <Buttons />
      </div>
      <div className="calc-back z-1"></div>
   </section>
)
}
export default Calc;