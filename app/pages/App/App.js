import React, {useEffect, useState} from 'react';
import {View, Text, Button, Header, Content} from 'native-base';
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
      setUser(result.data);
    };
    getKey();
  }, []);
  const goMateri = () => {
    props.navigation.navigate('MateriScreen');
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
          <Text style={styles.descriptionProgress}>100%</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.titleProgress}>Score</Text>
          <Text style={styles.descriptionProgress}>42</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.rowFirst}>
          <TouchableOpacity style={styles.materi} onPress={() => goMateri()}>
            <Image source={IMAGES.MATERI} />
            <Text style={styles.listText}>Materi</Text>
          </TouchableOpacity>
          <View style={styles.latihan}>
            <Image source={IMAGES.latihan} />
            <Text style={styles.listText}>Latihan Soal</Text>
          </View>
        </View>
        <View style={styles.rowSecond}>
          <View style={styles.ambil}>
            <Image source={IMAGES.ambil} />
            <Text style={styles.listText}>Ambil Quiz</Text>
          </View>
          <View style={styles.about}>
            <Image source={IMAGES.about} />
            <Text style={styles.listText}>About Us</Text>
          </View>
        </View>
      </View>
    </Content>
  );
};

export default App;
