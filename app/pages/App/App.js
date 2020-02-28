import React, {useEffect, useState} from 'react';
import {View, Text, Content} from 'native-base';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';
import SERVICES from '../../configs/services';
import styles from './styles';
import {IMAGES} from '../../configs';
import {Image, TouchableOpacity} from 'react-native';

const App = props => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const getKey = async () => {
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
      };
      const result = await SERVICES.getData(header);
      if (result.code === 200) {
        setUser(result.data);
        await storage.set('userId', result.data.userId);
      } else {
        props.navigation.navigate('AuthScreen');
      }
    };
    getKey();
  }, [props.navigation]);
  const goMateri = () => {
    props.navigation.navigate('MateriScreen');
  };
  const goLatihan = () => {
    props.navigation.navigate('LatihanScreen');
  };
  const goAbout = () => {
    props.navigation.navigate('AboutScreen');
  };
  const goQuiz = () => {
    props.navigation.navigate('QuizScreen');
  };
  return (
    <Content>
      <View style={styles.header}>
        <Image source={IMAGES.PICTURE} />
        <View style={styles.userData}>
          <Text style={styles.selamat}>Selamat Datang</Text>
          <Text style={styles.username}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.progress}>
        <View style={styles.left}>
          <Text style={styles.titleProgress}>Quiz Completion</Text>
          <Text style={styles.descriptionProgress}>{user.status}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.titleProgress}>Score</Text>
          <Text style={styles.descriptionProgress}>{user.nilai}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.rowFirst}>
          <TouchableOpacity style={styles.materi} onPress={() => goMateri()}>
            <Image source={IMAGES.MATERI} />
            <Text style={styles.listText}>Materi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.latihan} onPress={() => goLatihan()}>
            <Image source={IMAGES.latihan} />
            <Text style={styles.listText}>Latihan Soal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowSecond}>
          <TouchableOpacity style={styles.ambil} onPress={() => goQuiz()}>
            <Image source={IMAGES.ambil} />
            <Text style={styles.listText}>Ambil Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.about} onPress={() => goAbout()}>
            <Image source={IMAGES.about} />
            <Text style={styles.listText}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Content>
  );
};

export default App;
