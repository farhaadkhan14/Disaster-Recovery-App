import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Item, Input } from 'native-base';
import {View} from 'react-native';

function calcDistance(latitudeA, latitudeB, longitudeA, longitudeB){
  return Math.sqrt(Math.pow(latitudeA - latitudeB,2) + Math.pow(longitudeA - longitudeB, 2))
}

export default class DisplayPersonButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let person = this.props.Person;
    let me = this.props.Me;
    return (
      <Card style={{ height: 110 }}>
        <CardItem button>
          <Body style={{ flexDirection: 'row' }}>
            <View>
              <Icon type="FontAwesome" name="user-secret" style={{ paddingRight: 10, fontSize: 100, color: 'black' }} />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View>
                <Item rounded>
                  <Text style={{ padding: 2, paddingLeft: 10, paddingRight: 10, fontSize: 20 }} >
                    Name: 
                    {person.name}
                  </Text>
                </Item>
              </View>
              <View>
                <Item rounded>
                  <Text style={{ padding: 2, paddingLeft: 10, paddingRight: 10, fontSize: 20 }} >
                    Distance: 
                    {calcDistance(person.lon, me.lon, person.lat, me.lat)}
                  </Text>
                </Item>
              </View>
              <View>
                <Item rounded>
                  <Text style={{ padding: 2, paddingLeft: 10, paddingRight: 10, fontSize: 20}} >
                    Urgency: 
                    {person.urgency}
                  </Text>
                </Item>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
