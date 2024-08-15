import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#1d2125] w-100 h-12 p-3 border-b border-box flex flex-grow justify-between border-b-[#9fadbc26]'>
     <div className="left justify-center items-center flex">
     <h3 className='text-slate-50'>Gestion de Tareas</h3>
     </div>
     <div className="right flex items-center space-x-4">
      <span>Remote dev</span>
      <img className='rounded-full w-10' src="https://dreamlightvalleywiki.com/images/6/6a/Mike_Wazowski.png" alt="perfil dev" />
     </div>
      </div>
  )
}

export default Header