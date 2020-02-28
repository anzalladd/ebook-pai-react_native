import React, {useEffect, useState} from 'react';
import {View, Text, Spinner, Button} from 'native-base';
import STORAGE_KEY from '../../configs/storageKey';
import SERVICES from '../../configs/services';
import storage from '../../utils/storage';
import styles from './styles';
import FONT from '../../style/style';
import {Image} from 'react-native';
import {IMAGES} from '../../configs';

const Result = props => {
  const jawaban = props.navigation.getParam('payload', []);
  const [hasil, setHasil] = useState(0);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getSoal = async () => {
      setLoading(true);
      console.log(jawaban);
      const userId = await storage.get('userId');
      const payload = {
        jawaban,
        userId,
      };
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
        params: {
          userId,
        },
      };
      try {
        const result = await SERVICES.postQuiz(payload, header);
        console.log(result);
        setHasil(result.data.nilai);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getSoal();
    return () => {
      console.log('Unmounted');
    };
  }, [jawaban]);
  const goHome = () => {
    props.navigation.navigate('AppScreen');
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <View style={styles.container}>
          <Text style={[FONT.FONT_TITLE_WHITE]}>TES SELESAI!</Text>
          <Image source={IMAGES.QUIZ_ICON} />
          <Text style={[styles.text, FONT.FONT_TITLE_WHITE_REGULAR]}>
            Kamu mendapatkan
          </Text>
          <Text style={[styles.text, FONT.FONT_BIG_WHITE]}>{hasil}</Text>
          <Text style={[styles.text, FONT.FONT_TITLE_WHITE_REGULAR]}>Dari</Text>
          <Text style={[styles.text, FONT.FONT_BIG_WHITE]}>100</Text>
          <Button style={styles.btn} onPress={() => goHome()}>
            <Text style={{color: '#418B9B', textAlign: 'center'}}>HOME</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default Result;
