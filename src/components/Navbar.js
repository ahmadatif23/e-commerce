import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='h-16'>
        <div className='px-5 py-2.5 flex justify-between items-center'>
            <div className='flex-1 flex items-center'>
                <span className='text-sm cursor-pointer'>EN</span>
                <div className='border flex items-center ml-6 p-1.5'>
                    <input type="text" className='border-0 focus-visible:outline-none' />
                    <FontAwesomeIcon icon={ faMagnifyingGlass } />
                </div>
            </div>

            <div className='flex-1 text-center text-xl'>
                <h1 className='font-bold'>Comme</h1>
            </div>

            <div className='flex-1 flex items-center justify-end'>
                <div className='text-sm cursor-pointer mr-6'>REGISTER</div>
                <div className='text-sm cursor-pointer mr-6'>SIGN IN</div>
                <div className='cursor-pointer'>
                    <div className='relative'>
                        <FontAwesomeIcon icon={ faCartShopping } />
                        <span className='absolute -top-2 -right-2 h-4 w-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center'>7</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar