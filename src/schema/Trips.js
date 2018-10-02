const Realm = require('realm');


export default class Trips extends Realm.Object { }
Trips.schema = {
    name: 'Trips',
    properties: {
        name: 'string',
        dateTime: 'string'
    }
};
