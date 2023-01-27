import React from 'react'
import styled from 'styled-components'


function Section({backgroundImg, title, content, btnTxt}) {
  return (
    <Container bgImage={backgroundImg}>
       {/* <Background> */}
        <h1>{title}</h1>
        <p>{content}</p>
        <p className='button'>{btnTxt}</p>
       {/* </Background> */}
    </Container>
  )
}

export default Section

const Container = styled.div`
    top: 0;
    height: 100vh;
    width: 100vw;
    // background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: white;
    z-index: 3;
    // margin-bottom: 3em;
    background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  ${props => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    .button {
        cursor: pointer;
    }
`

// const Background = styled.div`
//     background-image: ${props => `url(${props.bgImage})`};
//     height: 100vh;
//     width: 100vw;
//     background-attachment: fixed;
//     background-size: cover;
//     background-position: center;
// `

// const Image = styled.div`
//     width: 60%;
//     // background-color: red;
//     height: 100%;
//     display:flex;
//     justify-content: center;


//     img {
//         padding-left: 5em;
//         // width: 300px;
//         // height: 300px;
//         z-index:10;
//     }
// `

// const Button = styled.div`
//     text-transform: uppercase;
//     p {
//         cursor: pointer;
//     }
// `

// const Text = styled.div`
//     width: 40%;
//     display :flex;
//     flex-direction: column;
//     text-align: center;
//     justify-content: center;
//     align-items: center;
// `