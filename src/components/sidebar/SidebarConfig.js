import {AiFillCompass, AiFillHeart, AiFillHome, AiFillMessage, AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
export const main=[
    {title:"Home", icon:<AiOutlineHome className="text-2x1 mr-5" />, isActiveIcon:<AiFillHome  className="text-2x1 mr-5"/>},
    {title:"Search", icon:<AiOutlineSearch className="text-2x1 mr-5"/>, isActiveIcon:<AiOutlineSearch className="text-2x1 mr-5"/>},
    {title:"Explore",icon:<AiOutlineCompass className="text-2x1 mr-5"/>, isActiveIcon:<AiFillCompass className="text-2x1 mr-5"/>},
    {title: "Reels",icon:<RiVideoLine className="text-2x1 mr-5" />, isActiveIcon:<RiVideoFill className="text-2x1 mr-5"/>},
    {title: "Message", icon:<AiOutlineMessage className="text-2x1 mr-5"/>, isActiveIcon:<AiFillMessage className="text-2x1 mr-5"/>},
    {title:"Notification", icon:<AiOutlineHeart className="text-2x1 mr-5"/>, isActiveIcon:<AiFillHeart className="text-2x1 mr-5"/>},
    {title:"Create", icon:<AiOutlinePlusCircle className="text-2x1 mr-5"/>, isActiveIcon:<AiFillPlusCircle className="text-2x1 mr-5"/>},
    {title: "Profile", icon:<CgProfile className="text-2x1 mr-5" />, isActiveIcon:<CgProfile className="text-2x1 mr-5"/>}
]