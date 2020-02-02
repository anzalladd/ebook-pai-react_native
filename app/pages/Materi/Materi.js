import React from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
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
} from 'native-base';
import {IMAGES} from '../../configs';
import styles from './styles';

const Materi = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  const materi = [
    {
      id: 1,
      title: 'Pengertian',
      content: 'Demokrasi berasal dari kata Demos yang memiliki',
      image: IMAGES.bab1,
    },
  ];

  const detailMateri = id => {
    props.navigation.navigate('DetailScreen', {
      id,
    });
  };

  const renderMateri = () => {
    const materies = materi.map(value => (
      <View style={styles.Bab} key={value.id}>
        <View style={styles.babTitle}>
          <Text style={styles.babTitle__title}>{value.title}</Text>
          <Text style={styles.babTitle__content}>{value.content}</Text>
          <TouchableOpacity onPress={() => detailMateri(value.id)}>
            <Text style={styles.babTitle__selengkapnya}>Baca Selengkapnya</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.babImage}>
          <Image source={value.image} />
        </View>
      </View>
    ));
    return materies;
  };

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
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.title}>
              <Text style={styles.mapel}>PPKn</Text>
              <Text style={styles.mapel}>SMA/SMK</Text>
            </View>
            <Text style={styles.titleMateri}>DEMOKRASI</Text>
          </View>
          <View style={styles.BabContainer}>{renderMateri()}</View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Materi;
