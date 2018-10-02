
import React, {Component} from 'react';
import Routes from './src/Routes';
import { StyleSheet,View} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}> 
        <Routes />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {    
    flex: 1,    
  },
});