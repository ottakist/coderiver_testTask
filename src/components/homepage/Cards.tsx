import RoundButton from '../../assets/Icons/RoundButton'
import Reactangle6 from '../../assets/Images/MoviePreviews/Rectangle 6.png'
import Reactangle7 from '../../assets/Images/MoviePreviews/Rectangle 7.png'
import Reactangle8 from '../../assets/Images/MoviePreviews/Rectangle 8.png'
import Reactangle9 from '../../assets/Images/MoviePreviews/Rectangle 9.png'
import Reactangle10 from '../../assets/Images/MoviePreviews/Rectangle 10.png'
import Reactangle11 from '../../assets/Images/MoviePreviews/Rectangle 11.png'
const Cards = () => {
  return (
    <section className='ml-[86px] mt-[54px] max-w-[910px]'>
      <div
        id='movies_card_header'
        className='flex items-center justify-between'
      >
        <h2 className='font-inter text-[22px] font-[400] leading-[144%] text-white'>
          Popular this week
        </h2>
        <div className='flex w-[103px] justify-between'>
          <RoundButton
            fill='white'
            width='38px'
            height='38px'
            scale={1}
            rotation={0}
          />

          <RoundButton
            fill='#A7A6A6'
            width='38px'
            height='38px'
            scale={1}
            rotation={180}
          />
        </div>
      </div>
      <div
        className='mt-8 flex h-[210px] w-full -translate-x-[180px] gap-x-[39px]'
        id='cards '
      >
        <img src={Reactangle10} alt='' />
        <img src={Reactangle6} alt='' />
        <img src={Reactangle7} alt='' />
        <img src={Reactangle8} alt='' />
        <img src={Reactangle9} alt='' />
        <img src={Reactangle11} alt='' />
      </div>
    </section>
  )
}

export default Cards
