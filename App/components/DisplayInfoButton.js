import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class DisplayInfoButton extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Card style={{ height: 100 }}>
        <CardItem>
          <Body>
            <Text>
              {this.props.text}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
