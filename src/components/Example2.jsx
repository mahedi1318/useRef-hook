import React, { useEffect, useState } from 'react'

const Example2 = ({items}) => {
    
    
    let [selected, setSelected] = useState(null)

    useEffect(()=>{
        setSelected(null)
    }, [items])


  return (
    <>
     <div className='mt-6'>
        <ul>
            {items?.map((item)=>(
                <li key={item.id} className='text-xl font-semibold text-yellow-800'>
                    <input onChange={()=> setSelected(item)} className='mr-2' type="checkbox"/>
                    {item.title}
                </li>
            ))}
        </ul>
            {selected && 
                <div className='mt-5 flex'>
                    <h2 className='mr-4 font-normal text-xl'>Selected Item : </h2>
                    <div className='text-xl font-bold'>{selected?.title}</div>
                </div>
             }
     </div>
    </>
  )
}

export default Example2
