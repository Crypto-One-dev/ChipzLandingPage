import React from 'react'
import LinkedIn from '../assets/svgs/linkedIn.svg'

interface memberProps {
  imgUrl: string,
  linkedInUrl: string,
  name: string,
  role: string
}

const Member = ({imgUrl, linkedInUrl, name, role}:memberProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex relative rounded-full w-[240px] h-[240px] border-[#CE2179] border-2 justify-center items-center'>
        <img className='w-[225px] h-[225px]' src={imgUrl} alt=''/>
        <a className='absolute bottom-[18px] right-[18px]' href={linkedInUrl}  target='_blank' rel="noreferrer">
          <img className='w-[36px] h-[36px]' src={LinkedIn} alt=''/>
        </a>
      </div>
      <span className='font-semibold text-[24px]'>{name}</span>
      <span className='font-semibold text-[22px] text-[#CE2179]'>{role}</span>
    </div>
  )
}

export default Member