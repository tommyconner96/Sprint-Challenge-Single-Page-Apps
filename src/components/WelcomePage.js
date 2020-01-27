import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const WelcomeContainer=styled.div`
display:flex
flex-direction:column;
`

const WelcomeContents=styled.div`
padding-top:20px;
padding-bottom:20px;
margin: 0 auto;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <WelcomeContainer>
          <WelcomeContents>
        <h1>Welcome to the ultimate fan site!</h1>

        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick" width='auto'
        />
        </WelcomeContents>
        <WelcomeContents>
        <Link className='link' to={'/characters'}>Character Index</Link>
        </WelcomeContents>
        </WelcomeContainer>
      </header>
    </section>
  );
}
