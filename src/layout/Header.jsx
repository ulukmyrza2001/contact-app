import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMdContact } from 'react-icons/io'
import SearchInput from '../components/search-bar/SearchInput'

const Header = () => {
   const [isFocus, setIsFocus] = useState(false)
   return (
      <HeaderStyled>
         <TitleApp isFocus={isFocus}>
            <IoMdContact fontSize={30} />
         </TitleApp>
         <SearchInput isFocus={isFocus} setIsFocus={setIsFocus} />
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   padding: 1rem 2rem;
   height: 70px;
   background-color: #212121;
   display: flex;
   align-items: center;
   justify-content: space-between;
   box-shadow: 6px 3px 10px #000000;
`
const TitleApp = styled.h3`
   display: flex;
   align-items: center;
   gap: 10px;
   min-width: fit-content;
   color: #8774e1;
   margin-right: 50px;
   ::before {
      content: 'Contact app';
      color: #8774e1;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      @media (max-width: 700px) {
         font-size: 13px;
         z-index: ${({ isFocus }) => (isFocus ? '-10' : '')};
         position: ${({ isFocus }) => (isFocus ? 'absolute' : 'static')};
      }
   }
`

export default Header
