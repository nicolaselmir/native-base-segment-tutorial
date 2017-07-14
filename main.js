/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
export default class tut4 extends Component {
  constructor(props) {
  super(props);
  this.firstpage=this.firstpage.bind(this);
  this.secondpage=this.secondpage.bind(this);
  this.state = {
    page:1,
    firstpageactive:true,
    secondpageactive:false,

  } ;
}
  render() {
    const page = this.state.page ;
    let shows = null;
    if (page == 1 ){
      shows = <Text>hello</Text>
    }else if (page == 2) {
      shows = <Text> hello page 2 </Text>
    }



    return (
      <Container>
         <Header>
           <Left>

           </Left>
           <Body>
             <Segment>
               <Button  active={this.state.firstpageactive}
                 onPress= {this.firstpage}><Text>Puppies</Text></Button>
               <Button  active={this.state.secondpageactive}
                 onPress= {this.secondpage}><Text>Cubs</Text></Button>
             </Segment>
           </Body>
           <Right>

           </Right>
         </Header>
         <Content padder>
          {shows}
         </Content>
       </Container>

    );
  }
  firstpage(){
  this.setState({
    page:1,
  firstpageactive:true,
secondpageactive:false})
  }

  secondpage(){
    this.setState({page:2,
    firstpageactive:false,
  secondpageactive:true})
  }



}
// firstpage() {
//    alert ("hello")
//  }


AppRegistry.registerComponent('tut4', () => tut4);
