import React from 'react'
import {HiPencilAlt} from 'react-icons/hi'
import {FaTrashAlt} from 'react-icons/fa'
import Link from 'next/link'
import axios from 'axios'

export default function Topiclist({title, desc,id}) {
    
    const topicname= title;
    
    const description=desc;
    const editPath= `/editTopic/${id}`

    const deleteTopic=async()=>{
        const res= await axios.delete(`/api/topics/?id=${id}`)
    }
  return (
    <>
    {/* <div className=' main w-[70%] mx-auto flex flex-col gap-8 mt-8'> */}

    <div className=" bg-sky-200  rounded-2xl p-4 flex  flex-col">
        <div className='flex'> 

        <div className="name text-4xl  mr-auto font-medium">{topicname}</div>
        <button className='edit m-2'>
            <Link href={editPath}>
            <HiPencilAlt className='text-2xl text-green-800'/>
            </Link>
            </button>

        <button className='dlt m-2 ' onClick={()=>{deleteTopic()}}><Link href="">
            <FaTrashAlt className='text-xl text-red-400'/>
            </Link></button>
        </div>
        <div className="desc text-xl mt-3">
            {description} </div>
    </div>
    
    {/* </div> */}
    </>
  )
}
