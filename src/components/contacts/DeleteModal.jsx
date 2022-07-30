import React from 'react'
import styled from 'styled-components'
import Modal from '../UI/modal/Modal'
import Flex from '../UI/ui-for-positions/Flex'

const DeleteModal = ({ isVisible, onClose, onClick }) => {
   return (
      <Modal width="300px" isVisible={isVisible} onClose={onClose}>
         <Flex width="100%" justify="center">
            <Message>Are you sure?</Message>
         </Flex>
         <Flex width="100%" justify="center" gap="30px" margin="2rem 0 0 0">
            <CancelButton onClick={(e) => onClose(e)}>Cancel</CancelButton>
            <Button onClick={onClick}>delete</Button>
         </Flex>
      </Modal>
   )
}

const Message = styled.h3`
   color: #8774e1;
   margin: 0 auto;
`
const Button = styled.button`
   border: none;
   background-color: transparent;
   padding: 0.5em;
   font-size: 15px;
   box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
   transition: all 0.2s;
   text-transform: uppercase;
   color: tomato;
   border-radius: 8px;
   :hover {
      background-color: #ff634736;
   }
`
const CancelButton = styled.button`
   border: none;
   background-color: transparent;
   padding: 0.5em;
   font-size: 15px;
   box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
   transition: all 0.2s;
   text-transform: uppercase;
   color: #8774e1;
   border-radius: 8px;
   :hover {
      background-color: #8674e12f;
   }
`

export default DeleteModal
