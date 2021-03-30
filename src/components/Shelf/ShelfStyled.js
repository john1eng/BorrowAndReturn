import styled from 'styled-components'

export const ShelfStyled = styled.div`
  display: grid;
  grid-template-columns: 20px ${props => props.shelfSpace}px 20px;
  grid-template-rows: 20px ${props => props.shelfHeight}px 20px;
  background-image: linear-gradient(to bottom right, rgb(224, 173, 131),rgb(218, 123, 47));
  
  @media only screen and (max-width: 376px){
    grid-template-columns: 20px 200px 20px;
  }`