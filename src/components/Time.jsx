import { useRef, useState } from "react"


const Time = () => {

    const [startTime, setStartTime] = useState(null)
    const [nowTime, setNowTime] = useState(null)

    const stopTimeRaf = useRef(null)

    let handleTimeStart = ()=>{
        setStartTime(Date.now())
        setNowTime(Date.now())

        stopTimeRaf.current = setInterval(() => {
            setNowTime(Date.now())
        }, 10);
    }

    const handleTimeStop = ()=>{
        clearInterval(stopTimeRaf.current)
    }

    let showTimeNumber = 0
    if(startTime != null && nowTime != null){
        showTimeNumber = (nowTime - startTime) / 1000
    }
    

  return (
    <>
      <div>
        <h1 className='text-2xl'>Time working running for : {showTimeNumber.toFixed(3)}</h1>
        <button onClick={handleTimeStart} className='text-xl bg-green-700 px-5 py-3 rounded-xl text-white mt-5'>start</button>
        <button onClick={handleTimeStop} className='text-xl bg-blue-700 px-5 py-3 rounded-xl text-white mt-5 ml-3'>stop</button>
      </div>
    </>
  )
}

export default Time
