import { useState } from 'react'
 
const ButtonLayout = (props) => {
    const { label, className } = props

  return (
    <button className={`bg-amarillo text-slate-800 hover:bg-amarillo_claro transition delay-75 cursor-pointer font-bold py-2 px-4 rounded-lg ${className}`}>
      {label}
    </button>
  )
}

export default ButtonLayout