import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import {FaComment} from 'react-icons/fa';
import "./ReUserPostCard.css"
const ReUserPostCard = () => {
  return (
    <div className='p-2'>
      <div className='post w-60 h-60'>
        <img 
        className='cursor-pointer'
        src="https://media.istockphoto.com/id/1474758563/es/foto/composici%C3%B3n-festiva-para-el-feliz-d%C3%ADa-de-la-madre-flores-coloridas-de-primavera-sobre-fondo.jpg?s=2048x2048&w=is&k=20&c=OtN08eADu-hOG0R539DG6xRNXCJHHNE8QBC2uTX-FtY=" 
        alt="" />
        <div className='overlay'>
            <div className='overlay-text flex justify-between'>
                <div className=''>
                    <AiFillHeart/> <span>10</span>
                </div>
                <div><FaComment/> <span>30</span></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReUserPostCard
