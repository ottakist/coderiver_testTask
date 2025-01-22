import NetflixLogo from '../../assets/Images/Logo.png'
import SearchIcon from '../../assets/icons/search.svg'
import UserImage from '../../assets/Images/avatar.png'
import { formatDate } from '../../utils/formatDate'
const Header = () => {
  return (
    <header className='flex flex-row justify-between   w-full  items-center '>
      <div
        id='left-section'
        className='flex flex-row justify-between  items-center mx-[86px] pt-[70px] '
      >
        <a href='/'>
          <img src={NetflixLogo} alt='NetflixLogo' className='h-12 w-auto' />
        </a>
        <div className='block bg-white h-7 w-[3px] ml-4 mr-[26px]'></div>
        <div
          className='font-kyiv text-2xl leading-[28.8px] font-medium text-[#C8C8C8]'
          id='date'
        >
          {formatDate(new Date())}
        </div>
      </div>
      <div
        className='flex flex-row items-center mx-10 pt-[40px]'
        id='right-section'
      >
        <button id='search' className='h-[43px] w-[43px] mr-[45px]'>
          <img src={SearchIcon} alt='search' className='w-full ' />
        </button>
        <div className='h-[74px]' id='user'>
          <img src={UserImage} alt='' />
        </div>
      </div>
    </header>
  )
}

export default Header
