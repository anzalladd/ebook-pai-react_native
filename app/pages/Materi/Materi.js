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
      title: '1. Pengertian',
      content: 'Demokrasi berasal dari kata Demos yang memiliki',
      image: IMAGES.bab1,
    },
    {
      id: 2,
      title: '2. Sejarah',
      content: 'Di Yunani, anggota parlemen Athena bernama ',
      image: IMAGES.bab1,
    },
    {
      id: 3,
      title: '3. Prinsip-prinsip',
      content: 'Negara demokrasi adalah negara yang ',
      image: IMAGES.bab1,
    },
    {
      id: 4,
      title: '4. Ciri-ciri',
      content: 'Ciri-ciri pemerintahan demokratis Dalam ',
      image: IMAGES.bab1,
    },
    {
      id: 5,
      title: '5. Landasan di Indonesia',
      content: 'Alinea pertama yang berbunyi Kemerdekaan',
      image: IMAGES.bab1,
    },
    {
      id: 6,
      title: '6. Perkembanganya',
      content: 'Tahun 1945-1950, Indonesia masih berjuang menghadapi',
      image: IMAGES.bab1,
    },
    {
      id: 7,
      title: '7. Jenis-jenisnya',
      content: 'Berdasarkan Penyaluran Kehendak Rakyat',
      image: IMAGES.bab1,
    },
    {
      id: 8,
      title: '8. Kelebihan Kekurangan',
      content: 'Demokrasi merupakan sistem yang melindungi',
      image: IMAGES.bab1,
    },
    {
      id: 9,
      title: '9. Contoh Negaranya',
      content: 'Amerika Serikat merupakan negara yang menganut sistem',
      image: IMAGES.bab1,
    },
    {
      id: 10,
      title: '10. Penerapanya',
      content: 'Penerapan Demokrasi di Lingkungan Sekolah ',
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
