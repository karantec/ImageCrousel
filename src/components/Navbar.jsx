
import {useState } from "react";
import{FaBars,FaTimes} from "react-icons/fa";
import {Link } from "react-scroll";
const Navbar = () => {

    const [nav,setNav]=useState(false);

    const links=[
        {
            id:1,
            link:"Explore",
        },
        {
            id:2,
            link:"Collection",
        },
        {
            id:3,
            link:"Community",
        },
        
    ]
  return (
    <div className='flex justify-between fixed items-center w-full h-20 bg-white px-4 py-4 text-white '>
        <div> 
            <h1 className='text-4xl  text-black  font-serif font-signature ml-2'>Image Gallery</h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(({link})=>(
                        <li key={link.id} className='cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                            <Link to={link} smooth duration={500} >{link}</Link>
                        </li>
                        
                    ))
            }

            
        </ul>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500  md:hidden'>
            {nav ? <FaTimes size={20}/>:<FaBars size={20}/>}

        </div>
        {
            nav && (
                <ul className='flex flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden  justify-center items-center'>
                {
                        links.map(({link})=>(
                                <li key={link.id} className='px-4 cursor-pointer capataliize py-6'>
                                    <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500} >{link}</Link>
                                    <h1> Light blue</h1>
                                </li>
                                
                            )) } 
        </ul>
  )}
       
    </div>
  )
}

export default Navbar