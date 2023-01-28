import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';



function Section({backgroundImg, title, content, btnTxt, path}) {
  return (
    // <Fade bottom>
    <Container bgImage={backgroundImg}>
       {/* <Background> */}
       <Fade bottom>
         <h1>{title}</h1>
        <p>{content}</p>
        <Link to={{pathname: path}}>
          {btnTxt &&
        <button className='button'>
        <span className="hover-underline-animation">{btnTxt}</span>
          </button>
        }
        </Link>
        </Fade>
       {/* </Background> */}
    </Container>
        // </Fade>
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
    background:linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),  ${props => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    letter-spacing: 2.5px;

    .button {
      border: none;
      background: none;
    }
    
    .button span {
      cursor: pointer;
      padding-bottom: 7px;
      letter-spacing: 3px;
      font-size: 14px;
      padding-right: 15px;
      text-transform: uppercase;
      color: white;
    }
    
    .hover-underline-animation {
      position: relative;
      color: black;
      padding-bottom: 20px;
    }
    
    .hover-underline-animation:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: -6px;
      background-color: #000000;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    
    .button:hover .hover-underline-animation:after {
      transform: scaleX(1);
      transform-origin: bottom left;
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