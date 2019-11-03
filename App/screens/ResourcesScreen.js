
import React, {Component} from 'react';
import DisplayLocationButton from '../components/DisplayLocationButton';
import DisplayPersonButton from '../components/DisplayPersonButton';
import { Container, Content } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';

const PersonData = [{
  lat: 11,
  lon: 11,
  name: "John",
  urgency: "Severe"
},{
  lat: 11,
  lon: 11,
  name: "John",
  urgency: "Severe"
},{
  lat: 11,
  lon: 11,
  name: "John",
  urgency: "Severe"
},{
  lat: 11,
  lon: 11,
  name: "John",
  urgency: "Severe"
}]

const LocationData = [{
  lat: 11,
  lon: 11,
  desc: "test",
  safe: 0
},{
  lat: 11,
  lon: 11,
  desc: "test",
  safe: 0
},{
  lat: 11,
  lon: 11,
  desc: "test",
  safe: 0
},{
  lat: 11,
  lon: 11,
  desc: "test",
  safe: 0
},{
  lat: 11,
  lon: 11,
  desc: "test",
  safe: 0
},]

const Me = {
  lat: 11,
  lon: 11
}

class RescuePage extends Component {
  render(){
    return (
      <Container style={{ height: 50 }}>
        <Content>
          {PersonData.map((person) => <DisplayPersonButton Person={person} Me={Me}/>)}
        </Content>
      </Container>
    );
  }
}

class DangerPage extends Component {
  render(){
    return (
      <Container style={{ height: 50 }}>
        <Content>
          {LocationData.map((location) => <DisplayLocationButton Location={location} Me={Me}/>)}
        </Content>
      </Container>
    );
  }
}

class SafePage extends Component {
  render(){
    return (
      <Container style={{ height: 50 }}>
        <Content>
          {PersonData.map((person) => <DisplayLocationButton Location={person} Me={Me}/>)}
        </Content>
      </Container>
    );
  }
}

const resourcesNavigator = createMaterialTopTabNavigator({
  Rescue: RescuePage,
  Danger: DangerPage,
  Safe: SafePage
});

resourcesNavigator.path = '';

export default resourcesNavigator;

