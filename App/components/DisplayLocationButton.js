import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Icon, Item} from 'native-base';
import { View } from 'react-native';

function calcDistance(latitudeA, longitudeA, latitudeB, longitudeB){
  return Math.sqrt(((latitudeA - latitudeB) ^ 2) + ((longitudeA - longitudeB) ^ 2))
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
            <View style={{ flexDirection: 'col' }}>
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
                    {calcDistance(location.lon, me.lon, location.lat, me.lat)}
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
