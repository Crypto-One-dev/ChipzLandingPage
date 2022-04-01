import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CardLogo from './assets/images/logo-color.png'
import LowFeeIco from './assets/svgs/lowFee.svg'
import DefiIco from './assets/svgs/defi.svg'
import ScissorIco from './assets/svgs/scissor.svg'
import PoolImg from './assets/images/pool.png'
import Bullet from './assets/svgs/bullet.svg'
import MiniBullet from './assets/svgs/mini-bullet.svg'
import Josh from './assets/images/Josh.png'
import Joab from './assets/images/Joab.png'
import Justin from './assets/images/Justin.png'
import Julian from './assets/images/Julian.png'
import Felipe from './assets/images/Felipe.png'
import Jacob from './assets/images/Jacob.png'
import Gavin from './assets/images/Gavin.png'
import Nick from './assets/images/Nick.png'
import DJ from './assets/images/DJ.png'
import TJ from './assets/images/TJ.png'
import Duckett from './assets/images/duckett.png'
import Instagram from './assets/svgs/instagram.svg'
import Telegram from './assets/svgs/telegram.svg'
import Twitter from './assets/svgs/twitter.svg'
import Facebook from './assets/svgs/facebook.svg'
import Card from './components/Card'
import Member from './components/Member'

function App() {
  const cards = [
    { 
      title: 'CRYPTO BETTING SITES',
      logo: '',
      comment: '',
      data: [
        'LIMITS ON PAYOUTS, TRADES, DEPOSITS & WITHDRAWLS',
        'IP RESTRICTIONS + SOME KYC',
        'GLOBAL MARKETS',
        'P2P BETTING ONLY + HOUSE TAKES FEES',
        'NO LENDING BUILT INTO BETS',
        'BET ON SPORTS'
      ],
      flag: false
    },
    { 
      title: 'CHIPZ',
      logo: CardLogo,
      comment: 'Chipz is the first to introduce DeFi-backed solutions for betting situations, allowing gamblers to stake assets and earn yield over time based on the result of major events.',
      data: [
        'NO LIMITS',
        'NO KYC',
        'GLOBAL MARKETS',
        'START YOUR OWN BETTING ROOM + COLECT FEES',
        'LENDING PROTOCOL BUILT INTO BETS',
        'BET ON ANYTHING'
      ],
      flag: true
    },
    { 
      title: 'TRADITIONAL SPORTSBOOKS',
      logo: '',
      comment: '',
      data: [
        'LIMITS ON PAYOUTS, TRADES, DEPOSITS & WITHDRAWLS',
        'FULL KYC REQUIRED',
        'REGIONAL MARKETS',
        'NO P2P HOUSE TAKES FEES',
        'NO LENDING BUILT INTO BETS',
        'BET ON SPORTS'
      ],
      flag: false
    }
  ]

  const crazyTags = [
    {
      icon: LowFeeIco,
      title: 'LOW FEES',
      description: 'Become a bookie for as little as $30 for 3 months!'
    },
    {
      icon: DefiIco,
      title: 'DEFI BACKED',
      description: 'Stake your CHPZ to earn USDC off our Revenue Share Pool'
    },
    {
      icon: ScissorIco,
      title: 'NO MIDDLEMAN',
      description: 'Cut the middleman out with our payout-friendly smart contracts'
    },
  ]

  const leaders = [
    {
      imgUrl: Josh,
      linkedInUrl: '',
      name: 'Josh Thompson',
      role: 'CEO',
    },
    {
      imgUrl: Joab,
      linkedInUrl: '',
      name: 'Joab Garza',
      role: 'CTO',
    },
    {
      imgUrl: Justin,
      linkedInUrl: '',
      name: 'Justin Lally',
      role: 'CMO',
    },
  ]

  const developers = [
    {
      imgUrl: Julian,
      linkedInUrl: '',
      name: 'Julian Andres Cuartas Gonzalez',
      role: 'Senior Software Engineer',
    },
    {
      imgUrl: Felipe,
      linkedInUrl: '',
      name: 'Felipe Marulanda',
      role: 'Fullstack Developer',
    },
  ]

  const advisors1 = [
    {
      imgUrl: Jacob,
      linkedInUrl: '',
      name: 'Jacob Busch',
      role: 'Advisor',
    },
    {
      imgUrl: Gavin,
      linkedInUrl: '',
      name: 'Gavin Maloof',
      role: 'Advisor',
    },
    {
      imgUrl: Nick,
      linkedInUrl: '',
      name: 'Nick Wilson',
      role: 'Advisor',
    },
  ]

  const advisors2= [
    {
      imgUrl: DJ,
      linkedInUrl: '',
      name: 'DJ Lethal',
      role: 'Advisor',
    },
    {
      imgUrl: TJ,
      linkedInUrl: '',
      name: 'TJ Duckett',
      role: 'Advisor',
    },
  ]

  const [burgerMenu, setBurgerMenu] = useState(false)
  const showMenu = (isShowMenu:any) => {
    setBurgerMenu(isShowMenu)
  }

  return (
    <div className={`App ${burgerMenu ? 'overflow-hidden' : ''}`}>
      <Header showMenu={showMenu}/>
      <div className={` ${burgerMenu ? 'hidden' : ''}`}>
        <div className='flex flex-col md:flex-row relative px-[4vw] lg:px-[12vw] pt-[10vh] bg-[#F7FAFC] gap-10'>
          {
            cards.map((card, index) => {
              return (
                <Card key={index} {... card}/>
              )
            })
          }
        </div>
        <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row crazy-bg sm:h-[50vh] mt-10 md:mt-0 mb-20 px-[2vw] py-[5vh] sm:py-[0vh] lg:px-[12vw] justify-between items-center'>
        {
          crazyTags.map((tag, i)=>{
            return (
              <div key={i} className='flex flex-col justify-center items-center py-[5vh] sm:my-[0vh] mx-[6vw]'>
                <img src={tag.icon} className='h-12 w-12' alt=''/>
                <span className='text-white font-semibold text-[24px] my-5'>{tag.title}</span>
                <span className='text-white font-normal text-[20px]'>{tag.description}</span>
              </div>
            )
          })
        }
        </div>
        <div className='flex flex-col px-[10vw] items-center'>
          <span className='text-[#CE2179] text-[36px] font-bold mb-8'>
            STAKE TO EARN
          </span>
          <span className='text-[#333333] text-left text-[20px] mb-4'>
            Chipz will host special DeFi betting events–major world events, including championship matches, political elections, the price of bitcoin in 2024, etc.
          </span>
          <span className='text-[#333333] text-left text-[20px] mb-4'>
            3% of all bets made on the platform will be placed into a revenue share pool, where serious CHPZ investors can stake their tokens to earn from the platform.
          </span>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <img className='flex-1 w-[100%] sm:w-[40%] mb-5 sm:mb-[0vh]' src={PoolImg} alt=''/>
          <div className='flex-1 flex flex-col justify-center items-center gap-6 sm:mr-8'>
            <span className='text-[#CE2179] text-[22px] font-semibold'>3% of ALL bets go into a Revenue Share Pool</span>
            <span className='text-[#CE2179] text-[22px] font-semibold sm:w-[20vw]'>STAKE YOUR CHPZ & EARN UP TO 100% APY</span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-10'>
          <span className='text-[#CE2179] text-[36px] font-bold mb-10'>ROADMAP 2022</span>
          <div className='flex flex-col justify-center mb-10 px-10 sm:px-0'>
            <div className='flex justify-center items-center sm:w-[90vw] md:w-[70vw] lg:w-[50vw]'>
              <div className='flex-0 sm:flex-1'/>
              <div className='flex-1 flex flex-col'>
                <div className='relative text-[36px] font-bold text-right border-b-2 border-[#888888]'>
                  Q1
                  <img className='absolute bottom-[-13px] left-[-11px] w-[24px] h-[24px]' src={Bullet} alt=''/>
                  <img className='absolute bottom-[-7px] right-[-5px] w-[12px] h-[12px]' src={MiniBullet} alt=''/>
                </div>
                <div className='flex flex-col text-[20px] border-dashed border-l-[2px] border-[#555555] items-flex-start pt-5 pb-10 pl-[3vw]'>
                  <span className='text-left'><b>&#183;</b> Launch Public Beta Platform</span>
                  <span className='text-left'><b>&#183;</b> Extensive Marketing Campaign</span>
                  <span className='text-left'><b>&#183;</b> Announce New Partnerships</span>
                  <span className='text-left'><b>&#183;</b> Unlock New Sports To Bet On</span>
                  <span className='text-left'><b>&#183;</b> List on CEX</span>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center sm:w-[90vw] md:w-[70vw] lg:w-[50vw] sm:ml-[2px]'>
              <div className='flex-1 flex flex-col'>
                <div className='flex relative justify-between text-[36px] font-bold text-left border-b-2 border-[#888888]'>
                  <div className='flex-1 sm:flex-0 border-dashed border-l-[2px] sm:border-l-[0px] border-[#555555] mt-[5px]'></div>
                  <span className='flex-1 text-right sm:text-left'>Q2</span>
                  <div className='flex-0 sm:flex-1 border-dashed border-r-[0px] sm:border-r-[2px] border-[#555555] mt-[5px]'></div>
                  <img className='absolute bottom-[-13px] left-[-11px] sm:right-[-11px] w-[24px] h-[24px]' src={Bullet} alt=''/>
                  <img className='absolute bottom-[-7px] right-[-5px] sm:left-[-5px] w-[12px] h-[12px]' src={MiniBullet} alt=''/>
                </div>
                <div className='flex flex-col text-[20px] border-dashed border-l-[2px] sm:border-l-[0px] sm:border-r-[2px] border-[#555555] items-flex-start pt-5 pb-10 px-[2vw]'>
                  <span className='text-left'><b>&#183;</b> Chipz Drive Racing Game</span>
                  <span className='text-left'><b>&#183;</b> Stake Your Chipz & Earn Off The Revenue Pool</span>
                  <span className='text-left'><b>&#183;</b> Terrestrial Marketing (Billboards, Radio)</span>
                </div>
              </div>
              <div className='flex-0 sm:flex-1'/>
            </div>
            <div className='flex justify-center items-center sm:w-[90vw] md:w-[70vw] lg:w-[50vw]'>
              <div className='flex-0 sm:flex-1'/>
              <div className='flex-1 flex flex-col'>
                <div className='flex relative text-[36px] font-bold text-right border-b-2 border-[#888888] justify-between'>
                  <div className='border-dashed border-l-[2px] border-[#555555] mt-[5px]'></div>
                  <span>Q3</span>
                  <img className='absolute bottom-[-13px] left-[-11px] w-[24px] h-[24px]' src={Bullet} alt=''/>
                  <img className='absolute bottom-[-7px] right-[-5px] w-[12px] h-[12px]' src={MiniBullet} alt=''/>
                </div>
                <div className='flex flex-col text-[20px] items-flex-start pt-5 pb-10 pl-[3vw]'>
                  <span className='text-left'><b>&#183;</b> Launch Public Beta Platform</span>
                  <span className='text-left'><b>&#183;</b> Extensive Marketing Campaign</span>
                  <span className='text-left'><b>&#183;</b> Announce New Partnerships</span>
                  <span className='text-left'><b>&#183;</b> Unlock New Sports To Bet On</span>
                  <span className='text-left'><b>&#183;</b> List on CEX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col px-[8vw]'>
          <span className='text-[#CE2179] text-[36px] font-bold mb-10'>MEET THE TEAM</span>
          <div className='flex flex-col md:flex-row justify-center items-center my-[3vh] gap-[6vw]'>
            {
              leaders.map((leader, i) => {
                return(
                  <Member key={i} {...leader}/> 
                )
              })
            }
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center my-[3vh] gap-[6vw]'>
            {
              developers.map((developer, i) => {
                return(
                  <Member key={i} {...developer}/> 
                )
              })
            }
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center my-[3vh] gap-[6vw]'>
            {
              advisors1.map((advisor, i) => {
                return(
                  <Member key={i} {...advisor}/> 
                )
              })
            }
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center my-[3vh] gap-[6vw]'>
              {
                advisors2.map((advisor, i) => {
                  return(
                    <Member key={i} {...advisor}/> 
                  )
                })
              }
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center px-[5vw] bg-[#2E2E2E] pt-10 pb-5'>
          <div className='flex flex-col mx-[5vw]'>
            <span className='text-white text-[32px] font-semibold'>&#10075;&#10075; The more I got to learn about the idea, got to know the people involved, it really got me excited...see you at the celebration party! &#10076;&#10076;</span>
            <div className='flex text-[#CE2179] items-center justify-end mr-[5vw] mt-2'>
              <div className='border-b-2 border-[#CE2179] h-[2px] w-[4vw] mr-2'/>
              <span className='text-18px'>TODD DUCKETT</span>
            </div>
          </div>
          <img className='sm:w-[30vw]' src={Duckett} alt=''/>
        </div>
        <div className='flex flex-col justify-center items-center my-[5vh]'>
          <span className='text-[28px] sm:text-[32px] font-semibold text-[#333333]'>Let the game begin!!!</span>
          <div className='flex justify-center items-center gap-3 sm:gap-10 mt-10 mb-10'>
            <img className='w-[64px] h-[64px]' src={Instagram} alt=''/>
            <img className='w-[64px] h-[64px]' src={Telegram} alt=''/>
            <img className='w-[64px] h-[64px]' src={Twitter} alt=''/>
            <img className='w-[64px] h-[64px]' src={Facebook} alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
