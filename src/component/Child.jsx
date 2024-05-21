import React, { useState } from 'react'

const Child = ({account,handleInc,handleDec,handleRes}) => {
    
    return (
        <div className='flex  flex-col justify-center items-center w-[800px] h-[70vh] border-[2px] border-black'>
            <h2 className='text-[4rem] mb-4'>Amount: {account.amount}</h2>

            <div className='flex flex-col gap-3 text-[2rem]'>
                <button onClick={handleInc} className='bg-purple-400 py-1 px-5 font-semibold text-white'>Increment</button>

                <button onClick={handleDec} className='bg-purple-400 py-1 px-5 text-white font-semibold'>Decrement</button>

                <button onClick={handleRes} className='bg-blue-600 text-white py-1 px-5 font-semibold'>Reset</button>
            </div>
        </div>
    )
}

export default Child