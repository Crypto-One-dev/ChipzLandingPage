import React from 'react'

interface cardProps  {
  title: string,
  logo?: string,
  comment?:string,
  data: string[],
  flag: boolean
}

const Card = ({title, logo, comment, data, flag }: cardProps) => {
  return (
        flag ?
          <div className='flex flex-col  flex-1'>
            <div className='flex flex-col px-5 pt-5 bg-white rounded-t-[8px] shadow-cardShadow transform rotate-270'>
              <div className='flex justify-between items-center mb-5'>
                <div className='text-[20px] font-semibold'>{title}</div>
                <img src={logo} alt='' className='w-10 h-10'/>
              </div>
              <div className='text-left text-[12px]'>
                {comment}
              </div>
              <div className='flex flex-col'>
                {
                  data.map((index, i) => {
                    return (
                    <div key={i} className='border-b-[1px] border-[#e3549d] last:border-b-0 text-[14px] font-semibold py-3'>
                      {index}
                    </div>
                  )})
                }
              </div>
            </div>
            <div className='bg-[#CE2179] text-white font-semibold p-5 shadow-cardShadow rounded-b-[8px] cursor-pointer'>
              Stake now!
            </div>
          </div>
          :
          <div className='flex flex-col flex-1 p-5 bg-white rounded-[8px] shadow-cardShadow mt-0 mb-0 md:mb-20 md:mt-[25vh]'>
            <div className='flex justify-center items-center mb-5 text-[20px] font-semibold'>
              {title}
            </div>
            <div className='flex flex-col'>
              {
                data.map((index, i) => {
                  return (
                  <div key={i} className='border-b-[1px] border-[#e3549d] last:border-b-0 text-[14px] font-semibold py-3'>
                    {index}
                  </div>
                )})
              }
            </div>
          </div>
  )
}

export default Card