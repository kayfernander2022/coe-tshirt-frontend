//Used as a landing page. path is ""

//aka home

import Section from "./Section"
import styled from 'styled-components'

function Landing(){
  return(
    <Container>
      <Section title="NEW IN" text="See all new inventory"/>
      <Section title='Best Sellers' text="Top rated"/>
    
  
      
  </Container>
  )
}

const Container= styled.div`
height:100vh;

`


export default Landing