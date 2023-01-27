import React from 'react'
import styled from 'styled-components'
import './Home.css'
import NavBar from './NavBar'
import Section from './Section'

function Home() {
  return (
    <>
    <NavBar />
        <div className="background">
            {/* <div className='journey'>
              <h1>
              ESTÁ PRONTO PARA EMBARCAR NESTA EXPERIÊNCIA FANTÁSTICA CONNOSCO? 
              </h1>
            </div> */}
        </div>
        <Section 
        title="Experiências"
        subtitle="BABABAB bBABABS bBABSBSB babsbdbd"
        backgroundImg="/images/TerraBonaBottle.jpg"
        />
        <Section 
        title="Sobre Nós"
        subtitle="BABABAB bBABABS bBABSBSB babsbdbd"
        backgroundImg="/images/test-view.jpg"
        />
        <Section 
        title="Vinhas"
        subtitle="BABABAB bBABABS bBABSBSB babsbdbd"
        backgroundImg="/images/TerraBonaBottle.jpg"
        />
    </>
  )
}

export default Home