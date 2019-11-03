import React from 'react';
import DisplayInfoButton from '../components/DisplayInfoButton';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

const factsData = [{
  id: 1,
  title: "See Water?",
  desc: "Turn around don't drown!"
},{
  id: 2,
  title: "Can't Handle Spicy Food?",
  desc: "Avoid it!"
},{
  id: 3,
  title: "See Power Lines?",
  desc: "Don't get close, call the cops!"
},{
  id: 4,
  title: "Plant A Tree",
  desc: "We'll reach 10,000,000"
},{
  id: 5,
  title: "See Suspicious Individuals?",
  desc: "Have your phone ready to call police if something happe!"
},{
  id: 6,
  title: "Insurance",
  desc: "Look into your area's prior disasters and choose insurance based on that!"
},{
  id: 7,
  title: "Earthquake?",
  desc: "Take cover under a table!"
},{
  id: 8,
  title: "Buy a Tesla",
  desc: "It's the safest car on the market!"
},{
  id: 9,
  title: "Feeling lonely?",
  desc: "Call 1-800-932-4616"
},{
  id: 10,
  title: "Know Cardiopulmonary Resuscitation",
  desc: "You never know when it can save a life."
}]


export default function TipsScreen({info}) {
  let {safeLocations, badLocations, inDanger, self} = info;
  return (
    <Container style = {{height: 50}}>
      <Header />
      <Content>
        {factsData.map((fact) => <DisplayInfoButton key={fact.id} Fact={fact}/>)}
      </Content>
    </Container>
  );
}

TipsScreen.navigationOptions = {
  header: null,
};