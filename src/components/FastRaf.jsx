



import { useRef } from 'react'


function FastRaf() {
  
  let ref = useRef(5)
  
    console.log("reandaraing...................!")

  let handleRef = ()=>{
    ref.current = ref.current + 1
    console.log(ref.current)
  }

  console.log(ref)

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <button onClick={handleRef} className='text-2xl bg-slate-700 p-3 rounded-xl text-white'>Chake me</button>
    </div>
    </>
  )
}

export default FastRaf
