import Realm from 'realm';

class Trips extends Realm.Object {}
Trips.schema = {
    name: 'Trips',
    properties: {        
        name: 'string',
        description: 'string',   
    },
};


export default new Realm({schema: [Trips]});