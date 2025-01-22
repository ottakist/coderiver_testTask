import { IconProps } from '../../assets/Icons/Play'
interface ButtonProps {
  text: string
  Icon: React.ComponentType<IconProps> | null
  color: string | null
  border: string | null
}
import React from 'react'

const Button: React.FC<ButtonProps> = ({ text, Icon, color, border }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-md bg-[${color}] border-3 h-auto w-full max-w-[271px] ${border ? 'border-[${border}] border-[3px]' : ''} px-[34px] py-4 font-inter text-[22px] leading-7 text-[400] text-white`}
    >
      {text}
      <div className='ml-[12px]'>
        {Icon && <Icon fill='white' width='32px' height='32px' />}
      </div>
    </button>
  )
}

export default Button
