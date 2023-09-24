import remove from '../../public/remove.svg';
import Image from 'next/image';
import './Calc.scss'

const buttons = [{
   name: 'Ac', 
   className: 'btn__Ac',
},
{
   name: remove,
   className: 'btn__remove',
},
{
   name: '/',
   className: 'btn__divisor'
},
{
   name: '*',
   className: 'btn__multiplier'
},
{
   name: 7,
   className: 'btn__seven'
},
{
   name: 8,
   className: 'btn__eight'
},
{
   name: 9,
   className: 'btn__nine',
},
{
   name: '-',
   className: 'btn__minus'
},
{
   name: 4,
   className: 'btn__four'
},
{
   name: 5,
   className: 'btn__five'
},
{
   name: 6,
   className: 'btn__six',
},
{
   name: '+',
   className: 'btn__plus'
},
{
   name: 1,
   className: 'btn__one'
},
{
   name: 2,
   className: 'btn__two'
},
{
   name: 3,
   className: 'btn__three',
},
{
   name: '=',
   className: 'btn__equal'
},
{
   name: 0,
   className: 'btn__zero'
},
{
   name: '.',
   className: 'btn__dot'
}]

function Buttons() {
   return (
   <div className="calc__btns">
      <div className="calc__main grid gap-2.5">
         {buttons.map((el, index) => {
            return (
               <button key={index} className={`rounded-2xl text-3xl text-slate-400 relative ${el.className} calc__btn`}>
               {el.name === remove ? <Image src={remove} alt='remove' fill={true} /> : el.name}
               </button>
            )
         })}
      </div>
      <div className="calc__right-side"></div>
   </div>
   )
}
export default Buttons;
