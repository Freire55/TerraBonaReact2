import React, { Suspense } from 'react'
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
        path="/vinhas"
        />
        <Section 
        title="Experiências"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        path="/experiences"
        />
        <Section 
        title="Villas"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/test-view.jpg"
        path="/villas"
        />
        <Section 
        title="Sobre Nós"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        path="/about-us"
        />
        <Section 
        title="Boavenutra"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        path="/boaventura"
        />
        <Section 
        title="Notícias"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        btnTxt="SAIBA MAIS"
        backgroundImg="/images/TerraBonaBottle.png"
        path="/news"
        />
        <Footer />
    </>
  )
}

export default Home