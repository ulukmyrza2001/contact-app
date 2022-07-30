/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getContacts, contactsActions } from '../../store/contacts-slice'
import ContactDetail from './ContactDetail'
import RequestNotFound from './RequestNotFound'
import GroupContact from './GroupContact'
import { groupContacts } from '../../utils/helpers/general'

const Contacts = () => {
   const { contacts, searchValue } = useSelector((state) => state.contact)
   const dispatch = useDispatch()
   const [visibleContactDetail, setVisibleContactDetail] = useState(false)

   const showDetailContact = (contact) => {
      setVisibleContactDetail(true)
      dispatch(contactsActions.getOneContact(contact))
   }
   const hideDetailContact = () => setVisibleContactDetail(false)

   const searchContacts = () => {
      return contacts
         .filter((el) =>
            el.name.toLowerCase().includes(searchValue?.toLowerCase())
         )
         .sort((a, b) => a.name.localeCompare(b.name))
   }

   useEffect(() => {
      localStorage.setItem('users', JSON.stringify(contacts))
   }, [contacts])

   useEffect(() => {
      if (!JSON.parse(localStorage.getItem('users')).length) {
         dispatch(getContacts())
      }
   }, [])

   return (
      <WrapperContacts>
         {(groupContacts(searchContacts()).length &&
            groupContacts(searchContacts()).map((contact) => (
               <GroupContact
                  key={contact.letter}
                  letter={contact.letter}
                  contactsGroup={contact.names}
                  showDetailContact={showDetailContact}
               />
            ))) || <RequestNotFound />}
         <ContactDetail
            isVisible={visibleContactDetail}
            onClose={hideDetailContact}
         />
      </WrapperContacts>
   )
}
const WrapperContacts = styled.div`
   margin: auto;
   width: 100%;
   max-width: 1000px;
   background: #212121;
   padding: 0.6rem;
   box-shadow: 3px 5px 10px black;
   margin-top: 7px;
   border-radius: 5px;
`

export default Contacts
