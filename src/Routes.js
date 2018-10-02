import React from 'react';
import {Router,Stack,Scene,Drawer} from 'react-native-router-flux';
import { YellowBox,StyleSheet} from 'react-native';

import Home from './components/Home';
import AddTrip from './components/AddTrip';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class Routes extends React.Component{
    
    constructor(props){
        super(props);        
    }

    render(){
        return(
            <Router>
                <Stack key="root">                    
                    <Scene key="home" hideNavBar={true} component={Home} title="Home"  />
                    <Scene key="add_trip" hideNavBar={true} component={AddTrip} title="Add Trip"  />    
                </Stack>
            </Router>
        );
    }
}

const styles =StyleSheet.create({
    
});