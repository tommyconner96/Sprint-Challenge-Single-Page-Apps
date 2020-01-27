import React from "react";
import styled from 'styled-components';

const NewHeader = styled.header`
background-color:purple;
color:white;
text-align: center;
margin: 0 auto;
width: 500px;
border-radius: 20px;
`

export default function Header() {
  return (
    <NewHeader>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </NewHeader>
  );
}
