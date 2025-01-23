import NetflixLogo from '../../assets/Images/Logo.png'
import UserImage from '../../assets/Images/avatar.png'
import { formatDate } from '../../utils/formatDate'
import Search from '../../assets/Icons/Search'
const Header = () => {
  return (
    <header className='flex w-full flex-row items-center justify-between'>
      <div
        id='left-section'
        className='ml-[86px] flex flex-row items-center pt-[70px]'
      >
        <a href='/'>
          <img src={NetflixLogo} alt='NetflixLogo' className='h-12 w-auto' />
        </a>
        <div className='ml-4 mr-[26px] block h-7 w-[3px] bg-white'></div>
        <div
          className='font-kyiv text-2xl font-medium leading-[28.8px] text-[#C8C8C8]'
          id='date'
        >
          {formatDate(new Date())}
        </div>
      </div>
      <div
        className='mx-10 flex flex-row items-center pt-[40px]'
        id='right-section'
      >
        <button id='search' className='mr-[45px] h-[43px] w-[43px]'>
          <Search width='43px' height='43px' fill='white' />
        </button>
        <div className='h-[74px]' id='user'>
          <img src={UserImage} alt='' />
        </div>
      </div>
    </header>
  )
}

export default Header
