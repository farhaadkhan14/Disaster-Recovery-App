import { Location } from 'expo';
import * as Permissions from 'expo-permissions';


const getLocation = async function(callback) {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      Location.watchPositionAsync(options, callback)
};


export default getLocation;