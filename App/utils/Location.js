import { Location, Permissions } from 'expo';


const getLocation = async function(callback) {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      Location.watchPositionAsync(options, callback)
};


