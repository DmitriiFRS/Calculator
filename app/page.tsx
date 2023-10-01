"use client"

import ToggleDarkLightRemix from './Mode/ToggleDarkLight'
import Multiple from './Mode/Multiple'
import Calc from './Calc/Calc'
import { RootState } from './Redux/store'
import { useSelector } from 'react-redux'

export default function Home() {
  const activeInput = useSelector((state: RootState) => state.calcReducer.activeMode);
  return (
    <main className={`${activeInput === 2 ? 'remixWrapper' : 'wrapper'} flex min-h-screen flex-col items-center`}>
      <div className="flex justify-beetween">
        <ToggleDarkLightRemix />
        <Multiple />
      </div>
      <Calc />
    </main>
  )
}
