
import React, { Component } from 'react';
import DisplayLocationButton from '../components/DisplayLocationButton';
import DisplayPersonButton from '../components/DisplayPersonButton';
import { Container, Content } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';

const PersonData = [{
  id: 1,
  lat: 11,
  lon: 11,
  name: "John",
  status: 0
}, {
  id: 2,
  lat: 11,
  lon: 11,
  name: "John",
  status: 1
}, {
  id: 3,
  lat: 11,
  lon: 11,
  name: "John",
  status: 2
}, {
  id: 4,
  lat: 11,
  lon: 11,
  name: "John",
  status: 3
}, {
  id: 5,
  lat: 11,
  lon: 11,
  name: "John",
  status: 4
}]

const LocationData = [{
  id: 1,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: true
},{
  id: 2,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: true
},{
  id: 3,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: true
},{
  id: 4,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: true
},{
  id: 5,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: true
},{
  id: 6,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: false
},{
  id: 7,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: true
},{
  id: 8,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe: false
},{
  id: 9,
  lat: 11,
  lon: 11,
  desc: "test",
  isSafe:false
}]

const Me = {
  lat: 11,
  lon: 11
}

class RescuePage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let {safeLocations, badLocations, inDanger, self} = this.props.screenProps
    return (
      <Container style={{ height: 50 }}>
        <Content>
          {inDanger.map((person) => <DisplayPersonButton key={person.id} Person={person} Me={self} />)}
        </Content>
      </Container>
    );
  }
}

class DangerPage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let { badLocations, self} = this.props.screenProps
    return (
      <Container style={{ height: 50 }}>
        <Content>
          {badLocations.map((location) => !location.isSafe ? (<DisplayLocationButton key={location.id} Location={location} Me={self} />) : null )}
        </Content>
      </Container>
    );
  }
}

class SafePage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let {safeLocations, self} = this.props.screenProps
    return (
      <Container style={{ height: 50 }}>
        <Content>
          {safeLocations.map((location) => location.isSafe ? (<DisplayLocationButton key={location.id} Location={location} Me={self} />) : (null) )}
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

