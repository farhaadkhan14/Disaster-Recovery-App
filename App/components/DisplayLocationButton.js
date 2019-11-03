import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Icon, Item} from 'native-base';
import { View } from 'react-native';

function calcDistance(latitudeA, latitudeB, longitudeA, longitudeB){
  return (Math.sqrt(Math.pow((latitudeA*10) - (latitudeB*10),2) + Math.pow((longitudeA * 10) - (longitudeB * 10), 2)) / Math.sqrt(20) *  69).toFixed(5)
}

function renderIcon(isSafe){
  if (isSafe){
    return <Icon type="FontAwesome" name="home" style={{ paddingRight: 10, fontSize: 100, color: 'black' }} />
  }
  else {
    return <Icon type="FontAwesome" name="bomb" style={{ paddingRight: 10, fontSize: 90, color: 'black' }} />
  }
}

export default class DisplayLocationButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let location = this.props.Location;
    let me = this.props.Me;
    return (
      <Card key={location.id} style={{ height: 110 }}>
        <CardItem button>
          <Body style={{ flexDirection: 'row' }}>
            <View>
              {renderIcon(location.isSafe)}
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View>
                <Item rounded>
                  <Text style={{ padding: 2, paddingLeft: 10, paddingRight: 10, fontSize: 20 }} >
                    Description: 
                    {location.desc}
                  </Text>
                </Item>
              </View>
              <View>
                <Item rounded>
                  <Text style={{ padding: 2, paddingLeft: 10, paddingRight: 10, fontSize: 20 }} >
                    Distance: 
                    {calcDistance(location.longitude, me.longitude, location.latitude, me.latitude)}
                    miles
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
