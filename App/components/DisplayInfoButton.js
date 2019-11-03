import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class DisplayInfoButton extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    let fact = this.props.Fact;
    return (
      <Card style={{ height: 100 }}>
        <CardItem>
          <Body>
            <Text style={{ paddingTop: 15, fontSize: 20}}>
              {fact.title}
            </Text>
            <Text>
              {fact.desc}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
