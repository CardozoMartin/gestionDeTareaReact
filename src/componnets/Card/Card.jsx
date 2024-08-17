import React, { useState } from 'react'
import { Plus, X } from 'react-feather'
import { Popover } from 'react-tiny-popover'

const Card = () => {
    const [show, setShow ] = useState(false);
    const [card, setCard ] = useState("")
  return (
    <div>
        <div className="flex flex-col">
            {show && 
            <div>
               
                <textarea placeholder='ingrese el titulo de la tarjeta' className='p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900' name="" id="" rows={10} cols={28}></textarea>
                <div className="flex p-1">
                    <button className='p-1 rounded bg-sky-500 mr-2'>Add Card</button>
                    <button onClick={()=> setShow(!show)} className='p-1 rounded hover:bg-gray-500'><X size={16}></X></button>
                </div>
            </div>}
            {!show &&
                <button onClick={()=> setShow(!show)} className='flex p-1 justify-start items-center mt-1 h-8 hover:bg-gray-500 rounded'>
                    <Plus size={16}></Plus> Add a card
                </button>
                }
        </div>
    </div>
  )
}

export default Card