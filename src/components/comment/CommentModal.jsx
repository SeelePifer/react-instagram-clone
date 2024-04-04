import {Modal,ModalOverlay ,ModalContent,ModalHeader,ModalBody, ModalCloseButton} from '@chakra-ui/react'
import React from 'react'

const CommentModal = ({onClose, isOpen}) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          
          <ModalBody>
            <div className='flex h-[75vh]'>
                <div className='w-[45%] flex flex-col justify-center'>
                    <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2024/02/23/11/50/woman-8591903_1280.jpg" alt="" />
                </div>
                <div className='border w-[55%]'>
                    <div className='flex items-center'>
                        <div>
                            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/21/14/29/car-8647805_1280.jpg" alt="" />
                        </div>
                        <div className='ml-2'>
                            <p>username</p>
                        </div>
                    </div>

                </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal
