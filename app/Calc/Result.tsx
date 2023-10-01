'use client'

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setInput2 } from "../Redux/calcSlice";

function Result() {
   const dataHistory = useSelector((state: RootState) => state.calcReducer.input1);
   const result = useSelector((state: RootState) => state.calcReducer.input2);
   const dispatch = useDispatch();
   
   return (
   <div className="calc__result flex flex-auto">
      <div className="flex-auto"><input value={dataHistory} type="text" className="calc__input-1" /></div>
      <div className=""><input value={result}  type="text" className="calc__input-2" /></div>
   </div>
   )
}
export default Result;