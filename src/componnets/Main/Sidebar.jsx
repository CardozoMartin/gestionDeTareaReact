import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, Plus, X } from 'react-feather'
import { Popover } from 'react-tiny-popover';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [ showpop, setShowpop] = useState(false)
  return (
    <div className={`bg-[#121417] transition-all linear duration-500 h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] ${collapsed ? "w-[40px]" : "w-[400px]"}`}>
      {collapsed &&
        <div className='p-2'>
          <button onClick={() => setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm'>
            <ChevronRight size={18}></ChevronRight>
          </button>
        </div>
      }
      {!collapsed &&
        <div>
          <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
            <h4>Remote Dev's Workspace</h4>
            <button onClick={() => setCollapsed(!collapsed)} className='hover:bg-slate-600 rounded-sm p-1'>

              <ChevronLeft size={18}></ChevronLeft>
            </button>
          </div>
          <div className="bordlist">
            <div className='hover:bg-slate-600 p-1 rounded-sm flex justify-between px-3 py-2'>
              <h6>Your Boards</h6>
             
              <Popover
                isOpen={showpop}
                positions={['right','top', 'bottom', 'left', ]}
                align='start'
                content={<div className='ml-2 p-2 w-80 flex flex-col justify-center items-center bg-slate-500 text-white rounded'>
                  <button onClick={() => setShowpop(!showpop)} className='absolute right-2 top-3 hover:bg-gray-900 rounded-sm'>
                    <X size={16}></X>
                  </button>
                  <h4 className='py-3'>Create bord</h4>
                  <img src="https://placehold.co/200x120/png" alt="" />
                  <div className="mt-2 flex flex-col items-start w-full">
                    <label htmlFor="title">Board Title <span>*</span></label>
                    <input type="text" className='mt-2 h-8 px-2 w-full bg-gray-700' />
                    <label htmlFor="color">Board Color</label>
                    <input type="color" className='mt-2 h-8 px-2 w-full bg-gray-700' />
                    <button className='mt-2 w-full rounded h-8 bg-slate-700 mt-2 hover:bg-gray-900'>Create</button>
                  </div>
                </div>}
              >
               
                <button onClick={() => setShowpop(!showpop)}>
                <Plus size={16}></Plus>
              </button>
              </Popover>
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