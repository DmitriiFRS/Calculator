"use client"

import ToggleDarkLightRemix from './Mode/ToggleDarkLight'
import Multiple from './Mode/Multiple'
import Calc from './Calc/Calc'
import { RootState } from './Redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Home() {
  
  const activeInput = useSelector((state: RootState) => state.calcReducer.activeMode);
  useEffect(() => {
    if (activeInput === 2) {
      document.body.style.background = '#130017'
    } else {
      document.body.style.background = '#DAF0FF;'
    }
  }, [activeInput])
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
