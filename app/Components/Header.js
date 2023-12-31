import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='overflow-hiddens fixed z-50 w-[90%] px-24 border-l-[20px] border-white  mx-auto left-[4.5rem] rounded-3xl p-4 top-0 bg-white flex items-center justify-between'>
      <img height={60} width={60} src={'/header.jpg'} />
      <div className='flex ml-28 justify-between w-[50%]'>
        <h2 className='text-sm  font-bold'>Emotions</h2>
        <h2 className='text-sm font-bold'>Manifesto</h2>
        <h2 className='text-sm font-bold'>Self-awareness test</h2>
        <h2 className='text-sm font-bold'>Work With Us</h2>
      </div>
      <div className='rounded-3xl text-white px-5 py-3 bg-black'> Download App</div>
    </div>
  )
}

export default Header