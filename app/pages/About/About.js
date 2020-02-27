import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  Container,
  Body,
  Right,
  Left,
  Button,
  Icon,
  Header,
  Content,
} from 'native-base';
import styles from './styles';
import FONT from '../../style/style';
import IMAGES from '../../configs/images';

const About = props => {
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
      <Content style={styles.container}>
        <Text style={[styles.title, FONT.FONT_REGULAR]}>Our Amazing Team</Text>
        <View style={styles.card}>
          <Image source={IMAGES.KUCING} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>
              Tim Leader & Designer
            </Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>Vangga Vibo A</Text>
            <Text style={styles.quote}>
              {`“It is hard to fail, but it is worse never\n to have tried to succeed”`}
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.KUCING} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>
              Mobile Developer
            </Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>
              Tri Aji Sektiantoro
            </Text>
            <Text style={styles.quote}>
              {`“It is hard to fail, but it is worse never\n to have tried to succeed”`}
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.KUCING} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>UI/UX Designer</Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>
              Widya Oktaviani
            </Text>
            <Text style={styles.quote}>
              {`“It is hard to fail, but it is worse never\n to have tried to succeed”`}
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.KUCING} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>System Analist</Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>Restu Pakerti</Text>
            <Text style={styles.quote}>{`“Eat, Sleep, Repeat”`}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.KUCING} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>
              Back End Developer
            </Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>
              Wijil Puspitajati
            </Text>
            <Text style={styles.quote}>
              {`“Teruslah berusaha semaksimal\n mungkin.”`}
            </Text>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default About;
