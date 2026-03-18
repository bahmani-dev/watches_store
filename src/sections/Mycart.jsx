import React from 'react'
import { Link } from 'react-router-dom'

function Mycart() {
    
    return <>
        <div className='w-[400px] border-2 relative mx-auto'>
            <Link to="/"><span className='absolute right-4 top-4 cursore-pointer'>❌</span></Link>
            <div className='px-6 my-10 flex flex-col gap-10'>
                <h1 className='text-lg font-bold text-center'>My Cart</h1>
                <div className="flex gap-5 ">
                    <img src="./clock1.png" alt="" className='w-[100px] h-[120px] bg-cover border-2 shadow-md py-3 px-5' />
                    <div className='flex flex-col gap-y-2 jsutify-center'>
                        <h1 className='text-xl'>Jazzmaster</h1>
                        <span className='text-lg text-yellow-600 font-semibold '>$1050</span>
                        <div className='flex justify-between items-center gap-2 mt-2'>
                            <p className='border-2 w-[20px] h-[20px] flex items-center justify-center px-3 py-3'>➖</p>
                            <p>0</p>
                            <p className='border-2 w-[20px] h-[20px] flex items-center justify-center px-3 py-3'>➕</p>
                            <div>
                                <img src="./delet.svg" alt="" className='ml-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <img src="./clock2.png" alt="" className='w-[100px] h-[120px] bg-cover border-2 shadow-md py-3 px-5' />
                    <div className='flex flex-col gap-y-2 jsutify-center'>
                        <h1 className='text-xl'>Rose Gold</h1>
                        <span className='text-lg text-yellow-600 font-semibold '>$850</span>
                        <div className='flex justify-between items-center gap-2 mt-2'>
                            <p className='border-2 w-[20px] h-[20px] flex items-center justify-center px-3 py-3'>➖</p>
                            <p>0</p>
                            <p className='border-2 w-[20px] h-[20px] flex items-center justify-center px-3 py-3'>➕</p>
                            <div>
                                <img src="./delet.svg" alt="" className='ml-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <img src="./clock3.png" alt="" className='w-[100px] h-[120px] bg-cover border-2 shadow-md py-3 px-5' />
                    <div className='flex flex-col gap-y-2 jsutify-center'>
                        <h1 className='text-xl'>Longines Rose</h1>
                        <span className='text-lg text-yellow-600 font-semibold '>$980</span>
                        <div className='flex justify-between items-center gap-2 mt-2'>
                            <p className='border-2 w-[20px] h-[20px] flex items-center justify-center px-3 py-3'>➖</p>
                            <p>0</p>
                            <p className='border-2 w-[20px] h-[20px] flex items-center justify-center px-3 py-3'>➕</p>
                            <div>
                                <img src="./delet.svg" alt="" className='ml-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-10'>
                    <p>3 items</p>
                    <p>$2880</p>
                </div>
            </div>
        </div>

    </>

}

export default Mycart



