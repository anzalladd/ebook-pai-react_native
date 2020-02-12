import React, {useEffect, useState} from 'react';
import {
  Text,
  Container,
  Header,
  Left,
  Button,
  Body,
  Right,
  Icon,
  Content,
  View,
  Spinner,
} from 'native-base';
import styles from './styles';
import FONT from '../../style/style';
import Soal from '../../components/Soal';
import STORAGE_KEY from '../../configs/storageKey';
import SERVICES from '../../configs/services';
import storage from '../../utils/storage';
import Modal from '../../components/modal';

const LatihanSoal = props => {
  const goBack = () => {
    props.navigation.goBack();
  };
  const [activeSoal, setActiveSoal] = useState(0);
  const [listSoal, setListSoal] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeJawaban, setActiveJawaban] = useState(0);
  const [listJawaban, setListJawaban] = useState([]);
  const [isShowPembahasan, setShowPembahasan] = useState(false);
  const [isModal, setModal] = useState(false);
  useEffect(() => {
    const getSoal = async () => {
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
      };
      const result = await SERVICES.getSoal(header);
      setListSoal(result.data);
      setLoading(false);
    };
    getSoal();
    return () => {
      console.log('Unmounted');
    };
  }, []);
  const nextSoal = () => {
    let newArray = [...listJawaban];
    newArray[activeSoal] = activeJawaban;
    if (activeJawaban === listSoal[activeSoal].jawaban) {
      setModal(true);
      setTimeout(() => {
        setActiveJawaban(0);
        setActiveSoal(activeSoal + 1);
        setListJawaban(newArray);
        setShowPembahasan(false);
        setModal(false);
      }, 1000);
    } else {
      setModal(true);
      setTimeout(() => {
        setShowPembahasan(true);
        setListJawaban(newArray);
        setModal(false);
      }, 1000);
    }
  };
  const nextSoalNoValidate = () => {
    setActiveJawaban(0);
    setActiveSoal(activeSoal + 1);
    setShowPembahasan(false);
  };
  const submitSoal = () => {
    let newArray = [...listJawaban];
    newArray[activeSoal] = activeJawaban;
    if (activeJawaban === listSoal[activeSoal].jawaban) {
      setModal(true);
      setTimeout(() => {
        setActiveJawaban(0);
        setListJawaban(newArray);
        setShowPembahasan(false);
        setModal(false);
        props.navigation.navigate('ResultScreen', {payload: listJawaban});
      }, 1000);
    } else {
      setModal(true);
      setTimeout(() => {
        setShowPembahasan(true);
        setListJawaban(newArray);
        setModal(false);
      }, 1000);
    }
  };
  const submitSoalNoValidate = () => {
    props.navigation.navigate('ResultScreen', {payload: listJawaban});
  };
  if (isLoading) {
    return <Spinner />;
  }
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
        <View style={styles.jumlahSoal}>
          <Text style={[FONT.FONT_CONTENT_MEDIUM]}>
            {activeSoal + 1}/{listSoal.length}
          </Text>
        </View>
        <View style={styles.soal}>
          <Soal
            title={listSoal[activeSoal].title}
            pilihan={listSoal[activeSoal].pililhan}
            onClick={value => setActiveJawaban(value)}
            activeJawaban={activeJawaban}
            isDisable={isShowPembahasan}
          />
        </View>
        {!isShowPembahasan && (
          <View style={styles.wrapperButton}>
            <Button
              icon
              light
              style={styles.btnForward}
              dark
              onPress={() =>
                activeSoal === listSoal.length - 1 ? submitSoal() : nextSoal()
              }>
              <Icon name="arrow-forward" style={styles.icon} />
            </Button>
          </View>
        )}

        {isShowPembahasan && (
          <View style={styles.pembahasan}>
            <View style={styles.penjelasan}>
              <Text style={[FONT.FONT_REGULAR]}>Penjelasan</Text>
            </View>
            <Text style={[FONT.FONT_CONTENT, styles.pembahasan]}>
              {listSoal[activeSoal].pembahasan}
            </Text>
            <View style={styles.wrapperButton}>
              <Button
                icon
                light
                style={styles.btnForward}
                dark
                onPress={() =>
                  activeSoal === listSoal.length - 1
                    ? submitSoalNoValidate()
                    : nextSoalNoValidate()
                }>
                <Icon name="arrow-forward" style={styles.icon} />
              </Button>
            </View>
          </View>
        )}
      </Content>
      {isModal && (
        <Modal isAnswer={activeJawaban === listSoal[activeSoal].jawaban} />
      )}
    </Container>
  );
};

export default LatihanSoal;
