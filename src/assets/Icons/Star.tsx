import React from 'react'
interface IconProps {
  fill: string
  width: string
  height: string
}

const Star: React.FC<IconProps> = ({ fill, width, height }) => {
  return (
    <svg
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      stroke={fill === 'none' ? 'white' : 'none'}
    >
      <path
        d='M16 2L11.45 11.22L1.28003 12.69L8.64003 19.87L6.90003 30L16 25.22L25.1 30L23.36 19.87L30.72 12.7L20.55 11.22L16 2Z'
        fill={fill}
        width={'12px'}
        height={height}
      />
    </svg>
  )
}

export default Star
