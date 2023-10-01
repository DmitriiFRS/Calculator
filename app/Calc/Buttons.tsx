import remove from '../../public/remove.svg';
import Image from 'next/image';
import './Calc.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { setInput1, setInput2 } from '../Redux/calcSlice';
import { useEffect, useState } from 'react';

const buttons = [{
   name: 'Ac', 
   className: 'btn__Ac',
   classNameB: 'btn__b__1',
   classNameR: 'btn__r__1'
},
{
   name: remove,
   className: 'btn__remove',
   classNameB: 'btn__b__1',
   classNameR: 'btn__r__1',
},
{
   name: '/',
   className: 'btn__divisor',
   classNameB: 'btn__b__2',
   classNameR: 'btn__r__2',
},
{
   name: '*',
   className: 'btn__multiplier',
   classNameB: 'btn__b__2',
   classNameR: 'btn__r__2'
},
{
   name: 7,
   className: 'btn__seven',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3'
},
{
   name: 8,
   className: 'btn__eight',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3'
},
{
   name: 9,
   className: 'btn__nine',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3',
},
{
   name: '-',
   className: 'btn__minus',
   classNameB: 'btn__b__2',
   classNameR: 'btn__r__2'
},
{
   name: 4,
   className: 'btn__four',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3',
},
{
   name: 5,
   className: 'btn__five',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3'
},
{
   name: 6,
   className: 'btn__six',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3',
},
{
   name: '+',
   className: 'btn__plus',
   classNameB: 'btn__b__2',
   classNameR: 'btn__r__2'
},
{
   name: 1,
   className: 'btn__one',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3',
},
{
   name: 2,
   className: 'btn__two',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3'
},
{
   name: 3,
   className: 'btn__three',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3',
},
{
   name: '=',
   className: 'btn__equal',
   classNameB: 'btn__b__2',
   classNameR: 'btn__r__2'
},
{
   name: 0,
   className: 'btn__zero',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3'
},
{
   name: '.',
   className: 'btn__dot',
   classNameB: 'btn__b__3',
   classNameR: 'btn__r__3'
}]

function Buttons() {
   const [test, setTest] = useState('')
   const dispatch = useDispatch()
   const mode = useSelector((state: RootState) => state.calcReducer.activeMode);
   const result = useSelector((state: RootState) => state.calcReducer.input2);
   function setToInput(e: any) {
      const value = e.target.innerHTML
      setTest(e.target.text)
      dispatch(setInput1(value))
   }
   return (
   <div className="calc__btns">
      <div className="calc__main grid gap-2.5">
         {buttons.map((el, index) => {
            return (
               <button onClick={e => setToInput(e)} key={index}
               className={`overflow-hidden duration-500 rounded-2xl text-3xl text-slate-400 relative ${el.className}
               ${mode === 1 ? el.classNameB : mode === 2 ? el.classNameR : ''} calc__btn`}>
               {el.name === remove ? <Image className={`${'btn__img'} ${mode === 1 ? 'btn__img__b' : mode === 2 ? 'btn__img__r' : ''}`}
               src={remove} alt='remove' fill={true} /> : el.name}
               </button>
            )
         })}
      </div>
      <div className="calc__right-side"></div>
   </div>
   )
}
export default Buttons;
