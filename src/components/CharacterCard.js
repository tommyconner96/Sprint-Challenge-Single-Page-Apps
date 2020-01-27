import React from "react";
import styled from 'styled-components';

const Grid = styled.div`
  display:flex;
  background-color:gray;
  flex-direction: column;
  margin: 0 auto;

`


const Card = styled.div`
background-color:lightgreen;
width: 300px;
margin: 0 auto;
margin-top: 20px;
margin-bottom:10px;
padding-left:10px;
border-radius: 10px;
`

const H1 = styled.h1`
color: blue;
`

const Details = styled.p`
color:gray;
`
function CharacterCard(props) {
  return (
    <Grid>
    <Card>
      <H1>{props.name}</H1>
      <Details>{props.species}</Details>
      <Details>{props.gender}</Details>
    </Card>
    </Grid>
  )
}
export default CharacterCard;
