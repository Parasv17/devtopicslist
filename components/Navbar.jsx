import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className="navabr w-[70%] bg-red-200  flex m-4 mx-auto p-4 items-center rounded-2xl ">
            <div className="logo mr-auto text-3xl font-semibold">
              <Link href="/">
                Dev Topics List
              </Link>
                 </div>
            <Link href="/addTopic">


            <button type="button" className='text-2xl bg-lime-300 p-3 rounded-lg font-medium'> Add Topic</button>
            </Link>
        </div>
     </>
  )
}
