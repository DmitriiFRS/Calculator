
import '../globals.css';
import Buttons from './Buttons';
import Result from './Result';

function Calc() {
return (
   <section className='calc'>
      <div className="calcInterface flex flex-col">
         <Result />
         <Buttons />
      </div>
      <div className="calc-back z-1"></div>
   </section>
)
}
export default Calc;