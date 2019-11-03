import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Item, Input } from 'native-base';
import {View} from 'react-native';

function calcDistance(latitudeA, latitudeB, longitudeA, longitudeB){
  return Math.sqrt(Math.pow(latitudeA - latitudeB,2) + Math.pow(longitudeA - longitudeB, 2))
}

function renderIcon(safeLevel){
  switch(safeLevel){
    case 0:
      return <Icon type="FontAwesome" name="user-secret" style={{ paddingRight: 10, fontSize: 100, color: 'black' }} />
    case 1:
        return <Icon type="Entypo" name="emoji-happy" style={{ paddingRight: 10, fontSize: 90, color: 'black' }} />
    case 2:
        return <Icon type="FontAwesome5" name="tired" style={{ paddingRight: 10, fontSize: 90, color: 'black' }} />
    case 3:
        return <Icon type="FontAwesome5" name="user-injured" style={{ paddingRight: 10, fontSize: 100, color: 'black' }} />
    case 4:
        return <Icon type="MaterialCommunityIcons" name="skull" style={{ paddingRight: 10, fontSize: 100, color: 'black' }} />
  }

}

export default class DisplayPersonButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let person = this.props.Person;
    let me = this.props.Me;
    return (
      <Card key={person.id} style={{ height: 110 }}>
        <CardItem button>
          <Body style={{ flexDirection: 'row' }}>
            <View>
              {renderIcon(person.status)}
            </View>
            <View style={{ flexDirection: 'col' }}>
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
                    {person.status}
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
