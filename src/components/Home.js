import React from 'react'
import './Home.css'
import NavBar from './NavBar'
import Section from './Section'
import Footer from './Footer'

function Home() {
  return (
    <>
    <NavBar />
        <Section 
        backgroundImg="/images/TerraBonaSea.png"
        />
        <Section 
        title="Vinhas"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaVinhas.jpg"
        />
        <Section 
        title="Experiências"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        />
        <Section 
        title="Villas"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/test-view.jpg"
        />
        <Section 
        title="Sobre Nós"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        />
        <Section 
        title="Boavenutra"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        />
        <Section 
        title="Notícias"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        />
        <Footer />
    </>
  )
}

export default Home