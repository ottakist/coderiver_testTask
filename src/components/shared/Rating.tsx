import Star from '../../assets/Icons/Star.tsx'

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className='mb-[57px] flex w-full max-w-[212px] flex-row justify-between py-[2px]'>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          fill={index < rating ? '#FFEA2B' : 'none'}
          width='30px'
          height='30px'
        />
      ))}
    </div>
  )
}

export default Rating
