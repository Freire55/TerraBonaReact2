import React from 'react'
import styled from 'styled-components'


function Section({backgroundImg, title, subtitle}) {
  return (
    <Container className='container-fluid'>
        {/* <div className='row'> */}
        <Image class="img-fluid" bgImage={backgroundImg}>
            <img src={backgroundImg} alt="" />
        </Image>
        {/* </div> */}
        <Text>
            <h1>{title}</h1>
            <p>{subtitle} </p>
        <Button>
            <p>Saiba Mais</p>
        </Button>
        </Text>
    </Container>
  )
}

export default Section

const Container = styled.div`
    margin-top: 3em;
    height: 60vh;
    width: 100vw;
    // background-color: blue;
    display: flex;
    z-index: 3;
    margin-bottom: 3em;
`

const Image = styled.div`
    width: 60%;
    // background-color: red;
    height: 100%;
    display:flex;
    justify-content: center;


    img {
        padding-left: 5em;
        // width: 300px;
        // height: 300px;
        z-index:10;
    }
`

const Button = styled.div`
    text-transform: uppercase;
    p {
        cursor: pointer;
    }
`

const Text = styled.div`
    width: 40%;
    display :flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`