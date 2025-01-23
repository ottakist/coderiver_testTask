import { useState } from 'react'
import { useEffect } from 'react'
const PMA = () => {
  const [active, setActive] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [active])

  return (
    <aside
      onClick={() => {
        setActive(!active)
        console.log(active)
      }}
      style={{
        transform: `translateX(${!active ? 147 : 0}px)`,
        transition: 'transform 0.3s ease-in-out'
      }}
      className='absolute bottom-[5%] right-0 flex h-[66px] w-[174px] items-center font-inter text-[24px] font-normal leading-[141.5%] text-white'
    >
      <div className='h-full w-[33px] bg-[#D40D1F]'></div>
      <div className='h-full w-full items-center justify-center bg-white bg-opacity-50 pl-[25px] pt-[15px]'>
        16+
      </div>
    </aside>
  )
}

export default PMA
