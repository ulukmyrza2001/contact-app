import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Flex from '../UI/ui-for-positions/Flex'

import NotFound from '../UI/not-found-content/NotFound'

const RequestNotFound = () => {
   const { searchValue } = useSelector((state) => state.contact)

   return (
      <Wrapper>
         {(searchValue && (
            <Container>
               <Flex margin="0 0 30px 0">
                  <Title className="title" size="18px">
                     <b>Results for {`"${searchValue}"`}</b>
                  </Title>
               </Flex>
               <Text className="text">
                  It appears that no listings have yet been created for
                  <Text className="searchText"> {`"${searchValue}"`}.</Text>
               </Text>
               <br />
            </Container>
         )) || <NotFound />}
      </Wrapper>
   )
}
const Text = styled.p`
   display: inline;
   font-weight: 300;
   font-size: 14px;
   line-height: 130%;
   color: white;
`
const Title = styled.p`
   display: inline;
   font-weight: 300;
   font-size: 16px;
   line-height: 130%;
   color: #7c4889;
`

const Wrapper = styled.div`
   width: 100%;
`
const Container = styled.div`
   max-width: 1200px;
   padding: 30px 10px;
   .title {
      @media (max-width: 600px) {
         font-size: 16px;
      }
   }
   .link {
      font-family: 'Inter';
      font-size: 16px;
      line-height: 19px;
      text-decoration-line: underline;
      color: #266bd3;
      letter-spacing: 0.4px;
      @media (max-width: 600px) {
         font-size: 14px;
      }
   }
   .text {
      letter-spacing: 0.4px;
      font-size: 16px;
      @media (max-width: 600px) {
         font-size: 14px;
      }
   }
   .searchText {
      color: #dd8a08;
      font-size: 16px;
      @media (max-width: 600px) {
         font-size: 14px;
      }
   }
   @media (max-width: 600px) {
      padding: 10px;
   }
`

export default RequestNotFound
