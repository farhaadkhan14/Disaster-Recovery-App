import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Icon, Item} from 'native-base';
import { View } from 'react-native';

function calcDistance(latitudeA, longitudeA, latitudeB, longitudeB){
  return Math.sqrt(((latitudeA - latitudeB) ^ 2) + ((longitudeA - longitudeB) ^ 2))
}

export default class DisplayLocationButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let location = this.props.Location;
    let me = this.props.Me;
    return (
      <Card style={{ height: 110 }}>
        <CardItem button>
          <Body style={{ flexDirection: 'row' }}>
            <View>
              <Icon type="FontAwesome" name="user-secret" style={{ paddingRight: 10, fontSize: 100, color: 'black' }} />
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
              <View>
                <Item rounded>
                  <Text style={{ padding: 2, paddingLeft: 10, paddingRight: 10, fontSize: 20}} >
                    Safety: 
                    {location.safe}
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
