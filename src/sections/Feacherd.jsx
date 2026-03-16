import React from 'react'

const Feacherd = () => {
    return <>
        <div className='flex flex-col items-center'>

            <h1 className=' text-lg font-bold border-t-2 border-y-amber-500 pt-3'>FEATURED</h1>

            <div className=" flex flex-col gap-20 my-10">
                <div className='w-[300px] h-[370px] shadow-xl border-2 border-gray-100 hover:scale-105  flex flex-col items-center justify-center relative'>
                    <img src="clock1.png" alt="clock" />
                    <h1 className='text-md font-bold mt-2'>JAZZMASTER</h1>
                    <p className='text-yellow-600 font-bold text-md my-1.5'>$1050</p>
                    <button className='bg-black text-white px-5 py-2 hover:scale-110 mb-5'>ADD TO CART</button>
                    <span className='text-sm bg-yellow-600 text-white px-3 py-1 absolute -left-3 top-10 -rotate-90'>SALE</span>
                </div>
                <div className='w-[300px] h-[370px] shadow-xl border-2 border-gray-100 hover:scale-105 flex flex-col items-center justify-center relative'>
                    <img src="clock2.png" alt="clock" />
                    <h1 className='text-md font-bold mt-2'>INGERSOLL</h1>
                    <p className='text-yellow-600 font-bold text-md my-1.5'>$250</p>
                    <span className='text-sm bg-yellow-600 text-white px-3 py-1 absolute -left-3 top-10 -rotate-90'>SALE</span>                    
                </div>
                <div className='w-[300px] h-[370px] shadow-xl border-2 border-gray-100 hover:scale-105 flex flex-col items-center justify-center relative'>
                    <img src="clock3.png" alt="clock" />
                    <h1 className='text-md font-bold mt-2'>POSE GOLD</h1>
                    <p className='text-yellow-600 font-bold text-md my-1.5'>$890</p>
                    <span className='text-sm bg-yellow-600 text-white px-3 py-1 absolute -left-3 top-10 -rotate-90'>SALE</span>
                </div>
            </div>
        </div>
    </>

}

export default Feacherd
