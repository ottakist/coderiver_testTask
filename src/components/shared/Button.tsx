import { IconProps } from '../../assets/Icons/iconTypes'
interface ButtonProps {
  text: string
  Icon: React.ComponentType<IconProps> | null
  color: string | null
  border: string | null
}
import React from 'react'

const Button: React.FC<ButtonProps> = ({ text, Icon, color, border }) => {
  console.log(color)
  return (
    <button
      style={{
        backgroundColor: color || 'transparent',
        borderColor: border || 'none',
        borderWidth: border ? '3px' : '0px'
      }}
      className='flex h-auto w-full max-w-[271px] items-center justify-center rounded-[10px] py-4 font-inter text-[22px] leading-7 text-[400] text-white'
    >
      {text}
      <div className='ml-[12px]'>
        {Icon && <Icon fill='white' width={32} height={32} />}
      </div>
    </button>
  )
}

export default Button
