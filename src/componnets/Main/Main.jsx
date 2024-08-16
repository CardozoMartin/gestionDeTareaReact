import React from 'react'
import { Edit, MoreHorizontal, UserPlus } from 'react-feather'

const Main = () => {
  return (
    <div className='flex flex-col bg-slate-900 w-full'>
      <div className="p-3 bg-black flex justify-between w-full bg-opacity-20">
        <h2 className='text-lg'> Mi tablero</h2>
        <div className='flex items-center justify-center'>
          <button className='bg-gray-200 text-gray-500 px-2 py-1 mr-2 rounded flex justify-center items-center'><UserPlus className='mr-2' size={16}></UserPlus> Share</button>
          <button className='hover:bg-slate-500   h-8 px-2 py-1 rounded'><MoreHorizontal size={16} /></button>
        </div>
      </div>
      <div className='flex flex-col w-full flex-grow relative'>
        <div className='absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden'>
          <div className='mr-3 w-60 h-fit rounded-md p-2 bg-black'>
            <div className="list-body">
              <div className='flex justify-between p-1'>
                <span>To do</span>
                <button><MoreHorizontal className='hover:bg-gray-500 rounded-md p-1 h-6 ' size={16}></MoreHorizontal></button>
              </div>
              <div className="item flex justify-between items-center bg-red-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-red-500">
                <span>Project Description</span>
                <span className='flex justify-start items-start'>
                  <button className='hover:bg-gray-500 p-1 rounded-sm'><Edit></Edit></button>
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Main