import React from 'react'
import {HiPencilAlt} from 'react-icons/hi'
import {FaTrashAlt} from 'react-icons/fa'
import Link from 'next/link'

export default function Topiclist() {
    const topiclist=[1,2,2];
    const topicname="Topic name";
    const subjet="subject";
    const description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis perferendis ullam distinctio assumenda reprehenderit! Dolorum consectetur";
  return (
    <>
    <div className=' main w-[70%] mx-auto flex flex-col gap-8 mt-8'>

    <div className=" bg-sky-200  rounded-2xl p-4 flex  flex-col">
        <div className='flex'> 

        <div className="name text-4xl  mr-auto font-medium">{topicname}</div>
        <button className='edit m-2'>
            <Link href="/editTopic/123">
            <HiPencilAlt className='text-2xl text-green-800'/>
            </Link>
            </button>

        <button className='dlt m-2 '><Link href="">
            <FaTrashAlt className='text-xl text-red-400'/>
            </Link></button>
        </div>
        <div className="desc text-xl mt-3">
            {description} </div>
    </div>
    <div className=" bg-sky-200  rounded-2xl p-4 flex  flex-col">
        <div className='flex'> 

        <div className="name text-4xl  mr-auto font-medium">{topicname}</div>
        <button className='edit m-2'>edit</button>
        <button className='dlt m-2 '>Delete</button>
        </div>
        <div className="desc text-xl mt-3">
            {description} </div>
    </div>
    </div>
    </>
  )
}
