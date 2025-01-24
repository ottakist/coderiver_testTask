import Button from '../shared/Button'
import Rating from '../shared/Rating'
import Play from '../../assets/Icons/Play'

const Info = () => {
  return (
    <section className='ml-[86px] h-auto max-w-[864px]'>
      <div className='flex flex-col justify-between gap-y-[27px]'>
        <div
          className='flex flex-row font-inter text-[32px] font-medium leading-[28.8px] text-white'
          id='tags'
        >
          <h3>Dramma</h3>
          <div className='mx-4 block h-7 w-[3px] bg-white'></div>
          <h3>Thriller</h3>
          <div className='mx-4 block h-7 w-[3px] bg-white'></div>
          <h3>Supernatural</h3>
        </div>

        <div
          className='font-inter text-[64px] font-extrabold leading-none tracking-[3.52px] text-white'
          id='title'
        >
          Stranger Things
        </div>

        <div
          id='info'
          className='fade-in flex flex-row items-center font-inter text-[30px] font-medium uppercase text-white'
        >
          <p id='year'>2019</p>
          <div className='mx-4 block h-5 w-[3px] bg-white'></div>

          <p id='director'>
            {'Director: '}
            <span className='text-29px font-[400] normal-case text-[#A7A6A6]'>
              Shawn Levy
            </span>
          </p>
          <div className='mx-4 block h-5 w-[3px] bg-white'></div>

          <p id='seasons'>
            {'SEASONS: '}
            <span className='text-29px font-[400] normal-case text-[#A7A6A6]'>
              3<span> (5 Episodes)</span>
            </span>
          </p>
        </div>
        <article
          className='fade-in font-inter text-[24px] font-[400] text-[#A7A6A6]'
          id='description'
        >
          <p>
            In 1980s Indiana, a group of young friends witness supernatural
            forces and secret government exploits. As they search for answers,
            the children unravel a series of extraordinary mysteries.
          </p>
        </article>

        <Rating rating={3} />
        <div className='tablet:flex-row flex max-w-[593px] flex-col justify-between'>
          <Button text='STREAM NOW' Icon={Play} color='#D40D1F' border={null} />
          <Button text='ALL EPISODES' Icon={null} color={null} border='white' />
        </div>
      </div>
    </section>
  )
}

export default Info
