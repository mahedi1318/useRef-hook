import React, { useState } from 'react'

const Example1 = ({UserId}) => {

    const [text, setText]= useState("")

    const handleTextChange = (e)=>{
        setText(e.target.value)
    }

  return (
    <>
      <div>
        <h1 className='mt-[50px] text-2xl font-bold'>{`This is a profile id : ${UserId}`}</h1>

        <div className='mt-8'>
            <input onChange={handleTextChange} className='block border-2 border-indigo-600 pl-3' type="text" value={text} />
            <p className='mt-[20px]'>Show input value : {text}</p>
        </div>
      </div>
    </>
  )
}

export default Example1
