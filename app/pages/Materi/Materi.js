import React from 'react';
import {View,ScrollView, Image} from 'react-native';
import {
  Text,
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Container,
  Content
} from 'native-base';
import {IMAGES} from '../../configs'; 
import styles from './styles';

const Materi = props => {
  const goBack = () => {
    props.navigation.goBack();
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
          <View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Pengertian Demokrasi</Text>
          <Text style={styles.Desc}>Demokrasi berasal dari </Text>
          <Text style={styles.Desc}>kata Demos yang memiliki </Text>
          <Image source={IMAGES.bab1} />
        </View>
          </View><View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Sejarah Demokrasi</Text>
        </View>
          </View><View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Prinsip Demokrasi</Text>
        </View>
          </View><View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Ciri-ciri Pemerintahan Demokrasi</Text>
        </View>
          </View><View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Landasan Demokrasi di Indonesia</Text>
        </View>
          </View><View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Perkembangan Demokrasi di Indonesia</Text>
        </View>
          </View><View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Jenis Demokrasi</Text>
        </View>
          </View><View style={styles.BabContainer}>
        <View style={styles.Bab}>
          <Text style={styles.TitleBab}>Kelebihan dan Kekurangan</Text>
        </View>
          </View>
          <View style={styles.BabContainer}>
        <View style={styles.Bab9}>
        <Text style={styles.TitleBab}>Contoh Negara Demokrasi</Text>
        </View>
          </View>  
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Materi;
