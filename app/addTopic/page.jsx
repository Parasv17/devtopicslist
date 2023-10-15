"use client"
import React from 'react'
import { useState } from 'react'

export default function addTopic() {
  const [topicname,setTopicname]=useState('');
  const [description,setDescription]=useState('');

  return (
        <>
        <div className="main w-[70%] bg-fuchsia-200 p-4 mx-auto rounded-2xl mt-8  flex ">
          <form  className='flex flex-col gap-4 w-[88%] mx-auto text-2xl mt-8' action="">
            <input type="text" name="" id="" placeholder='Topic name'  className='p-3 rounded-lg w-full'
            value={topicname}
            onChange={(e)=>{setTopicname(e.target.value)}}/>

            <input type="text" name="" id="" placeholder='Write Description.......'  className='p-3 rounded-lg'
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}/>

            <button type="button" className='p-2 bg-sky-300 rounded-xl mx-auto w-[80%] mt-5 font-semibold mb-4'> Add Topic</button>
          
          </form>
        </div>
        </>    
  )
}
