import { useState } from 'react'
import Star from '../../assets/Icons/Star.tsx'

const Rating = ({ rating }: { rating: number }) => {
  const [rate, setRate] = useState(rating)
  return (
    <div className='mb-[57px] flex w-full max-w-[212px] flex-row justify-between py-[2px]'>
      {Array.from({ length: 5 }, (_, index) => (
        <i
          className='w-full'
          onMouseEnter={() => setRate(index + 1)}
          onMouseLeave={() => setRate(rating)}
          key={index}
        >
          <Star
            key={index}
            fill={index < rate ? '#FFEA2B' : 'none'}
            width='32px'
            height='32px'
          />
        </i>
      ))}
    </div>
  )
}

export default Rating
