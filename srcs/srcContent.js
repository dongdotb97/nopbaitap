import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
            <Left>
                <Thumbnail source={ require('../img/anh1.jpg')}/>
              </Left>
              <Body>
                <Text>Đặng Văn Lâm</Text>
                <Text note>13 tháng 8, 1993 (26 tuổi)</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
            <Left>
                <Thumbnail source={require('../img/anh2.jpg')} />
              </Left>
              <Body>
                <Text>Bùi Tiến Dũng</Text>
                <Text note>2 tháng 10, 1995 (24 tuổi)</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
            <Left>
                <Thumbnail source={require('../img/anh3.jpg')} />
              </Left>
              <Body>
                <Text>Nguyễn Công Phượng</Text>
                <Text note>9 tháng 2, 1996 (23 tuổi)</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
            <Left>
                <Thumbnail source={require('../img/anh4.jpg')} />
              </Left>
              <Body>
                <Text>Đoàn Văn Hậu</Text>
                <Text note>14 tháng 4, 1996 (23 tuổi)</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
            <Left>
                <Thumbnail source={require('../img/anh5.jpg')} />
              </Left>
              <Body>
                <Text>Vũ Văn Thanh</Text>
                <Text note>19 tháng 4, 1999 (20 tuổi)	</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
            <Left>
                <Thumbnail source={require('../img/anh6.jpg')} />
              </Left>
              <Body>
                <Text>Đỗ Duy Mạnh</Text>
                <Text note>12 tháng 4, 1996 (23 tuổi)	</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
            <Left>
                <Thumbnail source={require('../img/anh7.jpg')} />
              </Left>
              <Body>
                <Text>Nguyễn Anh Đúc</Text>
                <Text note>22 tháng 7, 1993 (26 tuổi)</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
      
    );
  }
}