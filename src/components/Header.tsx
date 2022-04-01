import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import logo from '../assets/images/logo.png'
import {useMediaQuery} from "react-responsive";

interface menuProps {
  showMenu: (flag:boolean) => void
}

const Header = ({showMenu}:menuProps) => {
  const links =[
    {
      title: 'Bridge',
      url: 'https://bridge.mychipz.com/'
    },
    {
      title: 'Lp Staking',
      url: 'https://lp.mychipz.io/'
    },
    {
      title: 'Single Staking',
      url: 'https://live.mychipz.com/'
    },
    {
      title: 'White Paper',
      url: 'https://bridge.mychipz.com/'
    },
  ]
  const isMobile = useMediaQuery({query: '(max-width: 640px)'})
  const notMobile = useMediaQuery({query: '(min-width: 640px)'})



  return (
    <div className='relative main-bg h-screen sm:h-[85vh]'>
      <div className={`flex justify-between relative z-10 pt-5 pl-10`}>
        <img src={logo} className='h-10 w-36 cursor-pointer' alt=''/>
        {
          notMobile &&
            <div className='flex invisible sm:visible text-white items-center text-[14px] lg:text-[18px] font-medium gap-5 lg:gap-10 mr-10'>
              {
                links.map((link) => {
                  return( 
                    <a href={link.url} target='_blank' rel='noreferrer'>{link.title}</a>
                  )
                })
              }
              <button className='bg-[#F7FAFC] rounded-[12px] text-[#CE2179] font-semibold text-[16px] shadow-[0px_6px_0px_#8F1754] px-8 py-2'>Connect</button>
            </div>
        }
        {
          isMobile &&
            <HamburgerMenu links={links} showMenu={showMenu}/>
        }
      </div>
    </div>
  )
}

export default Header