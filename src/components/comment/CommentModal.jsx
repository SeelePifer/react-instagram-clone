import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import CommentCard from "./CommentCard";
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import {  AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

const CommentModal = ({ onClose, isOpen, isSaved,isPostLiked,handlePostLike,handleSavePost }) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://cdn.pixabay.com/photo/2024/02/23/11/50/woman-8591903_1280.jpg"
                  alt=""
                />
              </div>
              <div className=" w-[55%] pl-10">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://cdn.pixabay.com/photo/2024/03/21/14/29/car-8647805_1280.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div>
                    {[1,1,1,1,].map(() => <CommentCard/>)}
                </div>
                <div className='flex justify-between items-center w-full px-5 py-4'>
            <div className='flex items-center space-x-2'>
                {isPostLiked ?<AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostLike} />: <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer ' onClick={handlePostLike}/> }
                <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
            </div>
            <div>
                {isSaved? <BsBookmarkFill onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>: <BsBookmark onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/> }
                
                
            </div>
        </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
