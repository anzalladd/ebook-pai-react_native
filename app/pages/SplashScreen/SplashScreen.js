import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGES} from '../../configs';
import styles from './styles';

const SplashScreen = props => {
  useEffect(() => {
    const getPerformingTask = async () => {
      const data = await performingTask();
      if (data != null) {
        props.navigation.navigate('AuthScreen');
      }
    };
    getPerformingTask();
  }, [props.navigation]);
  const performingTask = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('done');
      }, 2000);
    });
  };
  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOGO} />
      <Text style={styles.title}>Digital Learning</Text>
      <Text style={styles.description}>Knowledge is in your hand</Text>
    </View>
  );
};

export default SplashScreen;
