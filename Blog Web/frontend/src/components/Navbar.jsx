import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {PF} from '../url'
import { UserContext } from '../context/UserContext'
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import {BiUserCircle} from 'react-icons/bi'
import Menu from './Menu';

const Navbar = () => {

  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }



  const {user}=useContext(UserContext)
  return (
    <div className='flex items-center sticky top-0 z-10 justify-between px-6 md:px-[200px] py-4 bg-slate-50'>
      <h1 className='text-xl font-extrabold'><Link to="/">Blog Web</Link></h1>

      {path==="/" && <div className="flex justify-center items-center space-x-0">
    <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
    <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/>
      </div>}
      
      {/* <div className='flex items-center justify-center space-x-4 md:space-x-8'>
       {user?<h3 className='text-lg'><Link to="/write">Create</Link></h3>:""}
       {user? <Link to={"/profile/"+user._id}><div className='flex items-center justify-center space-x-2 cursor-pointer md:space-x-3'>
       
       {user?<div className='flex items-center justify-center bg-black rounded-full'>
          <img src={PF+user.profilePic} alt="pic" className='w-6 h-6 rounded-full'/>
       </div>:
       <p className='text-lg md:text-xl'><BiUserCircle/></p>}
        <h3 className='text-lg'>{user.username}</h3>
       
       
       </div> </Link>: <h3 className='text-lg'><Link to="/login">Log in</Link></h3>}
       {user? <h3 className='text-lg'><Link to="/logout">Log out</Link></h3> : <h3 className='text-lg'><Link to="/register">Register</Link></h3>}
      </div> */}



       <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {/* {user? <h3><Link to="/write">Create</Link></h3> :<h3><Link to="/login">Login</Link></h3>} */}
      {user? <Link to={"/profile/"+user._id}><div className='flex items-center justify-center space-x-2 cursor-pointer md:space-x-3'>
       
       {user?<div className='flex items-center justify-center bg-black rounded-full'>
          <img src={PF+user.profilePic} alt="pic" className='w-6 h-6 rounded-full'/>
       </div>:
       <p className='text-lg md:text-xl'><BiUserCircle/></p>}
        <h3 className='text-m'>{user.username}</h3>
       
       
       </div> </Link>: <h3 className='text-lg'><Link to="/login">Login</Link></h3>} 
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3 className='text-lg'><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
      {menu && <Menu/>}
    </div>
    </div>
  )
}

export default Navbar
