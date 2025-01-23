import React, { useState } from 'react'
import { IconProps } from './iconTypes'

interface CustomIconProps extends Partial<IconProps> {
  scale?: number
  rotation?: number
}
const RoundButton: React.FC<CustomIconProps> = ({
  width,
  height,
  scale = 1,
  rotation = 0
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const hoverStyle = isHovered
    ? {
        transform: `rotate(${rotation}deg) scale(${scale * 1.08})`
      }
    : {}

  return (
    <button>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        style={{
          transform: `rotate(${rotation}deg) scale(${scale})`,
          transition: 'transform 0.3s, fill 0.3s',
          ...hoverStyle
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <circle
          cx='19'
          cy='19'
          r='18.2875'
          transform='rotate(-180 19 19)'
          stroke={isHovered ? 'white' : '#A7A6A6'}
          strokeWidth='1.425'
          className='fill-none'
        />
        <path
          d='M21.6916 27.075L23.5892 25.1774L17.4253 19L23.5892 12.8226L21.6916 10.925L13.6166 19L21.6916 27.075Z'
          fill={isHovered ? 'white' : '#A7A6A6'}
        />
      </svg>
    </button>
  )
}

export default RoundButton
