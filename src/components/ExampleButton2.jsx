
import { useState } from 'react'
import { Item1, Item2 } from '../IteamData/Data'
import Example2 from './Example2'


const ExampleButton2 = () => {

    let [item, setItem]= useState(Item1)

  return (
    <>
    <div>
        <button onClick={()=> setItem(Item1)} className='px-9 py-4 bg-slate-700 text-white font-medium mr-8'>Change item id : 1</button>
        <button onClick={()=> setItem(Item2)} className='px-9 py-4 bg-slate-700 text-white font-medium'>Change item id : 2</button>
    </div>
      <Example2 items={item}/>
    </>
  )
}

export default ExampleButton2
