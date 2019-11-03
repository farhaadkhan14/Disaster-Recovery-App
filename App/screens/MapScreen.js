import React, { useState, useEffect } from 'react';
//import { MapView } from 'expo';
import MapView, { Marker, HeatMap, Circle } from 'react-native-maps';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import {
  Platform,
  StyleSheet,
} from 'react-native'


const MapScreen = function ({ info }) {
  const { safeLocations, badLocations, inDanger, self } = info
  const [isSafeLocation, setSafeLocation] = useState(false)
  const [safe, setSafe] = useState(safeLocations)
  const [bad, setBad] = useState(badLocations)
  const [people, setPeople] = useState(inDanger)
  const [position, setPosition] = useState(self)
  const [marks, setMarks] = useState([])
  const [fabActive, setFabActive] = useState(false)

  useEffect(() => {
    if (safeLocations != safe)
      setSafe(safeLocations)
    if (badLocations != bad)
      setBad(badLocations)
    if (inDanger != people)
      setPeople(inDanger)
    if (self != position)
      setPosition(self)
  }, [safeLocations, badLocations, inDanger, self])

  return (
    <Container>
      <Header />
      <MapView
        style={styles.container}
        initialRegion={position}
        showsUserLocation
        showsMyLocationButton
        showsPointsOfInterest
        showsCompass
        showsScale
        showsBuildings
        onPress={(event) => updateMarks(setMarks, marks, isSafeLocation, event.nativeEvent.coordinate)}
      >
        {renderPeople(people)}
        {renderArea(safe, '#3c9dde', 20)}
        {renderArea(bad, '#8f1209', 60)}
        {renderMarks(marks, 200)}

        
      </MapView>
      <Fab
          active={fabActive}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => setFabActive(!fabActive)}>
          <Icon name="share" />
          <Button style={{ backgroundColor: '#4C4CFF' }} onPress={() => setSafeLocation(true)}>
            <Icon type="Entypo" name="emoji-happy" />
          </Button>
          <Button style={{ backgroundColor: '#ff0000' }}>
            <Icon type="MaterialCommunityIcons" name="skull" onPress={() => setSafeLocation(false)}/>
          </Button>
        </Fab>
    </Container>
  );
};

const updateMarks = function (setMarks, marks, isSafeLocation, coords) {
  if (isSafeLocation) {
    coords.color = '#4C4CFF'
    coords.title = 'Safe'
  }
  else {
    coords.color = '#ff0000'
    coords.title = 'Dangerous'
  }
  setMarks([coords, ...marks])
}

const renderMarks = function (marks, offset) {
  return marks.map(({ latitude, longitude, color, title }, index) =>
    <Marker
      key={index + offset}
      title={title}
      coordinate={{ latitude, longitude }}
      pinColor={color}
    />
  )
}

const renderPeople = function (people) {
  return people.map(({ name, description, status, latitude, longitude }, index) =>
    <Marker
      key={index}
      title={name}
      description={description}
      coordinate={{ latitude, longitude }}
      pinColor={statusColor(status)}
    />
  )
}


const statusColor = function (status) {
  switch (status) {
    case 0: return '#909399'
    case 1: return '#2ca629'
    case 2: return '#c9c012'
    case 3: return '#ff0000'
  }
}


const renderArea = function (areas, color, offset) {
  return areas.map((coords, index) =>
    <Circle
      key={index + offset}
      center={coords}
      radius={30}
      fillColor={color}
    />
  )
}


//const renderDanger = function(areas) {
//  return ( <HeatMap points={areas} /> )
//}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


export default MapScreen;