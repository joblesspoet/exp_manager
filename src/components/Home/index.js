
import React, {Component} from 'react';
import {Platform, StyleSheet,View} from 'react-native';
import { Container, Header, Title, Content, List, ListItem, Button, Left, Right, Body, Icon, Text,Fab } from 'native-base';
import {Actions} from 'react-native-router-flux';
//const Realm = require('realm');
import realm from '../../schema/';

class Home extends Component{

    constructor(props) {
        super(props);     
        this.state = {
            realm: null
        }   
        this.trips = [];
        this.data = realm.objects('Trips').sorted('name');
        //this.trips = [];
        /*if (this.trips.length < 1) {
            realm.write(() => {
                realm.create('Trips', { name: 'Todo List', description: new Date() });
            });
        }*/
        
    }
 
    componentDidMount() {       
        //alert(JSON.stringify(this.data));
    }
    

  render() {  
    let items = this.data.map((item,index)=>{
        return item;
    }) 
        
    return (
      <Container>
        <Header>                
          <Body >
            <Title>Manage Trips</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
            <List dataArray={items}
                renderRow={(item,rowId,index) =>
                <ListItem button={true}>
                    <Left><Text>{item.name}</Text></Left>
                    <Right>
                        <Button transparent onPress={()=>alert(index)}>
                            <Icon name="arrow-forward" />
                        </Button>
                    </Right>
                </ListItem>
                }>
            </List>            
        </Content> 
        <Fab               
            direction="up"
            containerStyle={{ }}                
            position="bottomRight"
            onPress={()=> Actions.add_trip()}
        >
            <Icon name="add" type="MaterialIcons" />
        </Fab>       
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

export default Home;