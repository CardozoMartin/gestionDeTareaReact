import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, Plus } from 'react-feather'

const Sidebar = () => {
  const [ collapsed, setCollapsed] = useState(false);
  return (
    <div className={`bg-[#121417] transition-all linear duration-500 h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] ${collapsed ? "w-[40px]" : "w-[400px]"}`}>
      {collapsed &&
    <div className='p-2'>
      <button onClick={()=> setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm'>
        <ChevronRight size={18}></ChevronRight>
      </button>
    </div>
    }
    {!collapsed &&
    <div>
      <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
      <h4>Remote Dev's Workspace</h4>
    <button onClick={()=> setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm p-1'>
      
        <ChevronLeft size={18}></ChevronLeft>
      </button>
      </div>
      <div className="bordlist">
        <div className='hover:bg-slate-600 p-1 rounded-sm flex justify-between px-3 py-2'>
          <h6>Your Boards</h6>
          <button>
            <Plus size={16}></Plus>
          </button>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <button className='px-2 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-900'>
              <span className='w-6 h-max rounded-sm mr-2 bg-red-600'>&nbsp;</span>
              <span>My trello Board</span>
            </button> 
          </li>
        </ul>
      </div>
    </div>}
    </div>
  )
}

export default Sidebar