import React from 'react';
import {Image} from 'react-native';
import {View, Text} from 'native-base';
import styles from './styles';
import {IMAGES} from '../../configs';

const Modal = props => {
  return (
    <View style={styles.modal}>
      <View style={styles.card}>
        <Image source={props.isAnswer ? IMAGES.BENAR : IMAGES.SALAH} />
        <Text style={styles.text}>{props.isAnswer ? 'Benar' : 'Salah'}</Text>
      </View>
    </View>
  );
};

export default Modal;
