import React from 'react';
import {View} from 'react-native';
import {
  Text,
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Container,
  Content,
  Accordion,
} from 'native-base';
import styles from './styles';

const Materi = props => {
  const goBack = () => {
    props.navigation.goBack();
  };
  const dataArray = [
    {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
  ];
  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
      <Content>
        <View style={styles.wrapper}>
          <View style={styles.title}>
            <Text style={styles.mapel}>PPKn</Text>
            <Text style={styles.mapel}>SMA/SMK</Text>
          </View>
          <Text style={styles.titleMateri}>DEMOKRASI</Text>
          <View style={styles.materi}>
            <Accordion
              dataArray={dataArray}
              headerStyle={styles.headerAccordion}
              animation={true}
              expanded={true}
              icon="arrow-down"
              expandedIcon="arrow-up"
              style={styles.accordion}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Materi;
