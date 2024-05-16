import React, { useState } from 'react'
import Example1 from './Example1'

const ExampleButton1 = () => {

    let [userId, setUserId] = useState(1)

    let handleButoon1 = ()=>{
        setUserId(userId === 1 ? 2 : 1)
    }

  return (
    <>
    <div>
        <button className='px-9 py-4 bg-slate-700 text-white font-medium' onClick={handleButoon1}>Profile Change id : {userId === 1 ? 2 : 1} {" "}</button>
        <Example1 key={userId} UserId={userId}/>
    </div>     
    </>
  )
}

export default ExampleButton1
