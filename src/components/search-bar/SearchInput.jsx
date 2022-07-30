/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { contactsActions } from '../../store/contacts-slice'
import useDebounce from '../../hooks/useDebounce'

let blockedEffect = true

const SearchInput = ({ isFocus, setIsFocus }) => {
   const disptach = useDispatch()
   const debounceSearch = useDebounce(searchContactHandler, 700)
   const [search, setSearch] = useState('')

   function searchContactHandler() {
      return disptach(contactsActions.searchContact(search))
   }
   const inputChangeHandler = (value) => setSearch(value)

   useEffect(() => {
      if (blockedEffect) {
         blockedEffect = false
         return
      }
      debounceSearch()
   }, [debounceSearch])

   return (
      <WrapperInput isFocus={isFocus}>
         <IconSearch onClick={() => setIsFocus(true)} />
         {isFocus && <IconClose onClick={() => setIsFocus(false)} />}
         <SearchInputStyled
            onChange={(e) => inputChangeHandler(e.target.value)}
            isFocus={isFocus}
            type="search"
            placeholder="search"
         />
      </WrapperInput>
   )
}
const IconSearch = styled(BiSearch)`
   position: absolute;
   left: 10px;
   top: 55%;
   transform: translateY(-50%);
   font-size: 22px;
   color: #8a8a8a;
   cursor: pointer;
   z-index: 1;
`
const IconClose = styled(IoMdClose)`
   position: absolute;
   left: -30px;
   top: 55%;
   transform: translateY(-50%);
   font-size: 22px;
   color: #8a8a8a;
   cursor: pointer;
   z-index: 1;
`
const SearchInputStyled = styled.input`
   outline: none;
   border: none;
   background-color: #2c2c2c;
   padding: ${({ isFocus }) => (isFocus ? '0.6rem 0 0.6rem 2.5rem' : '0')};
   color: white;
   font-size: 17px;
   border-radius: 10px;
   transition: all 0.5s;
   width: 100%;
   letter-spacing: 1px;
   opacity: ${({ isFocus }) => (isFocus ? '1' : '0')};
   ::placeholder {
      color: #8a8a8a;
   }
`
const WrapperInput = styled.div`
   background: transparent;
   padding-left: ${({ isFocus }) => (isFocus ? '0' : '2rem')};
   width: ${({ isFocus }) => (isFocus ? '400px' : '0')};
   position: relative;
   transition: all 0.5s;
`

export default SearchInput
