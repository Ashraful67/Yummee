import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill,BsPerson} from 'react-icons/bs'
import{TbTruckReturn} from 'react-icons/tb'
import{FaGoogleWallet} from 'react-icons/fa'
import{MdHelp,MdOutlineFavorite} from 'react-icons/md'
const TopNav = () => {
    const [state,setState] = useState(false)
    return(
        <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() =>setState(!state)} className="cursor-pointer">
                    <AiOutlineMenu size={25}/>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Yum
                    <span className='font-bold text-orange-500'>Mee</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px] ">
                    <p className=" bg-orange-700 rounded-full text-white p-2 font-bold">Free</p>
                    <p className="font-bold p-2">Delevery</p>
                </div>
            </div>
            <div className=" bg-gray-200 rounded-full flex justify-between items-center px-2 w-[200px] sm:w-[300px] lg:w-[500px]">
                <input className="bg-transparent w-full p-2 focus:outline-none" type="text" placeholder="Search Meal"/>
                <AiOutlineSearch/>
            </div>
            <button className=" bg-orange-500 text-white rounded-full border-none font-bold hidden md:flex items-center py-2"> 
                <BsFillCartFill/>Cart
            </button>
            <button className="bg-orange-500 p-2 rounded-full border-none hidden lg:flex">
                <BsPerson className="text-white rounded-full border-none px-1 font-bold" size={25}/>
                <span className="text-white ">Porfile</span>
            </button>
            {
                state ? (<div onClick={()=>setState(!state)} className="bg-black/60 w-full h-screen fixed z-10 top-0 left-0" ></div>) : ("")
            }
            <div className={ state ? "bg-white h-screen w-[300px] sm:w-[500px] lg:w-[500px] fixed z-10 top-0 left-0 duration-500"
                : "bg-white h-screen w-[300px] fixed z-10 top-0 left-[-100%] duration-500"
            }>
                <h1 className="text-2xl px-2">Yum<span className=" text-3xl text-orange-500 px-1 font-bold">Eats</span></h1>
                <AiOutlineClose className="cursor-pointer absolute right-2 top-2 " onClick={()=>setState(!state)} size={25}/>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex cursor-pointer' >
                            <BsPerson className="mr-4 mt-1 text-white bg-black rounded-full" sixe={25}/>Profile
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer' >
                            <TbTruckReturn className="mr-4 mt-1 text-white bg-black rounded-full" sixe={25}/>Delivery
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer' >
                            <MdOutlineFavorite className="mr-4 mt-1 text-white bg-black rounded-full" sixe={25}/>Favorite
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer' >
                            <FaGoogleWallet className="mr-4 mt-1 text-white bg-black rounded-full" sixe={25}/>Wallet
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer' >
                            <MdHelp className="mr-4 mt-1 text-white bg-black rounded-full" sixe={25}/>Help
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
};
export default TopNav;