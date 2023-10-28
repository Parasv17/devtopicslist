'use client'
import Image from 'next/image'
import Topiclist from '@/components/Topiclist'
import { useEffect, useState } from 'react'
import axios from 'axios'

 

export default  function Home() {

  const getTopics = async () => 
  {
  
      try {
        const res = await axios.get('/api/topics')
        // console.log(res.data.body)
        
        // return res.data.body
        setTopics(res.data.body)
        console.log(topics)
        if(!res.status === 200)
        {
          throw new Error(res.data.body.message)
        }
      }
      catch (err) {
      console.log(err.message)
      }
  }
  
  const [topics, setTopics] = useState([])
  // setTopics(await getTopics())
  useEffect(() => { getTopics() }, [topics])
  return (
    <>
      <div className='main w-[70%] mx-auto flex flex-col gap-8 mt-10'>

        {topics.map((topic) => {
          return (<>
            <Topiclist key={topic._id} title={topic.title} desc={topic.description} id={topic._id} />
            {/* <h1>{topic._id}</h1> */}
            {/* // console.log(topic._id) */}
          </>
          )

        })}
      </div>
    </>
  )
}
