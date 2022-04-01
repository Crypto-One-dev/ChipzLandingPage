import React, {useState} from 'react'
import {Squash as Hamburger} from 'hamburger-react'
import closeIco from '../assets/svgs/close.svg'

interface HamburgerMenuProps {
  links: any,
  showMenu: (flg:boolean) => void
}

const HamburgerMenu = ({ links, showMenu } : HamburgerMenuProps)=> {
  const [isShowMenu, setShowMenu] = useState(false);
  return(
    <div className='flex flex-col pr-10 h-screen'>
      <div className='flex justify-end'>
        <Hamburger rounded toggled={isShowMenu} color={isShowMenu ? "#FFFFFF" : "#FFFFFF"} label="Show Menu" hideOutline={false} onToggle={toggled => {
            if (toggled) {
                setShowMenu(true)
                showMenu(true)
                // open a menu
            } else {
                // close a menu
                setShowMenu(false)
                showMenu(false)
            } 
        }}/>
      </div>
      <div className={isShowMenu ? 'flex flex-col menu-animation opacity-100' : 'menu-animation opacity-0 z-[-1]'}>
        <img className='cursor-pointer' src={closeIco} alt='' onClick={()=>{setShowMenu(false); showMenu(false)}}/>
        {
          links.map((link: {title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; url: string | undefined;  }, i: React.Key | null | undefined) => {
            return (
              <a key={i} href={link.url} target='_blank' rel='noreferrer'>{link.title}</a>
            )
          })
        }
      </div>
    </div>
  )
}

export default HamburgerMenu
