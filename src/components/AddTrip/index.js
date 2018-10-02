
import React, {Component} from 'react';
import {Platform, StyleSheet,View} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text,Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';


class AddTrip extends Component{
    constructor(props) {
        super(props);        
    }
    
  render() {    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add Trip</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
                       
        </Content>             
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default AddTrip;