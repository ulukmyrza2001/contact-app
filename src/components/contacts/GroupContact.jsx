import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'

const GroupContact = ({ letter, contactsGroup, showDetailContact }) => {
   return (
      <>
         <Group>{letter}</Group>
         {contactsGroup.map((contact) => (
            <Contact
               onClick={() => showDetailContact(contact)}
               key={contact.id}
               contact={contact.name}
               address={`${contact.address.city} | ${contact.address.suite}`}
               id={contact.id}
            />
         ))}
      </>
   )
}
const Group = styled.h4`
   color: #8774e1;
   margin: 15px 0px 5px 10px;
   font-weight: 200;
`

export default GroupContact
