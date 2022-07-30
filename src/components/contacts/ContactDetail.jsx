import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from '../UI/modal/Modal'
import contactPhoto from '../../assets/image/photContact.png'
import Flex from '../UI/ui-for-positions/Flex'
import EditContact from './EditContact'

const ContactDetail = ({ isVisible, onClose }) => {
   const { contact } = useSelector((state) => state.contact)
   const [showEditOption, setShowOption] = useState(false)
   const firstName = contact?.name?.split(' ')[0]
   const lastName = contact?.name?.split(' ')[1]

   const showEditOptionHandler = () => setShowOption(true)
   const hideEditOptionHandler = () => setShowOption(false)

   return (
      <Modal width="500px" isVisible={isVisible} onClose={onClose}>
         <ContactDetailStyled>
            <ContactPhotoStyled />
         </ContactDetailStyled>

         {!showEditOption && (
            <>
               <Flex width="100%" margin="3px 0">
                  <Button onClick={showEditOptionHandler}>Edit</Button>
               </Flex>
               <Wrapper>
                  <Label>First name</Label>
                  <Name>{firstName}</Name>
               </Wrapper>
               <Wrapper>
                  <Label>Last name</Label>
                  <Name>{lastName}</Name>
               </Wrapper>
               <Wrapper>
                  <Label>Number</Label>
                  <Name>{contact.phone || <Disabled>Not found</Disabled>}</Name>
               </Wrapper>
            </>
         )}
         {showEditOption && (
            <EditContact hideEditOption={hideEditOptionHandler} />
         )}
      </Modal>
   )
}
const ContactDetailStyled = styled.div`
   max-width: 600px;
   background-color: transparent;
`
const ContactPhotoStyled = styled.div`
   background-color: gray;
   background-image: url(${contactPhoto});
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
   width: 100%;
   height: 200px;
`
const Name = styled.h3`
   color: whitesmoke;
   font-weight: 200;
`
const Wrapper = styled.div`
   width: 100%;
   padding: 0.5rem;
   border-bottom: 0.1px solid #313131;
   display: flex;
   flex-direction: column;
   gap: 5px;
`
const Label = styled.label`
   color: #8774e1;
`
const Disabled = styled.h3`
   color: #f5f5f56b;
   font-weight: 200;
   font-size: 13px;
`
const Button = styled.button`
   width: 100%;
   border: none;
   background-color: transparent;
   padding: 0.5em;
   font-size: 15px;
   box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
   transition: all 0.2s;
   text-transform: uppercase;
   color: #8774e1;
   border-radius: 2px;
   :hover {
      background-color: #8674e12f;
   }
`

export default ContactDetail
