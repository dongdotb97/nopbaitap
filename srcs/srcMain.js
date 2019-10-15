import React, { Component } from 'react';
import {Text, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class PageOne extends Component {
  state={
                user:'',
                pass:''
            }
  render() {
    return (
      <Container>
        
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input  onChangeText={(text) => this.setState({user:text})} />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input secureTextEntry ={true} onChangeText={(text) => this.setState({pass:text})} />
            </Item>
            
          </Form>

            <Button success 
            onPress={()=>{this.getInput(this.state.user,this.state.pass)}}
            style={{width:100,marginLeft:150,paddingTop:5}}
            >
              <Text style={{alignContent:"center",textAlign:"center",fontWeight:"bold",fontSize:18,marginLeft:25}}>Login</Text> 
            </Button>
        </Content>
      </Container>
    );
  }
  getInput = e => {
              let user=this.state.user.toString();
              let pass=this.state.pass.toString();
              if( user=="" )
              return Alert.alert('User cant no be null');
              if(pass=="")
              return Alert.alert('Password cant no be null');
              if(user=='phamduydong' && pass=='123456')
              {
                return Actions.Home();
              }
              else{
                Alert.alert('Login faild');
              }
  }
}
