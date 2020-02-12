import React from 'react';
import {View, Text, Radio} from 'native-base';
import styles from './styles';
import FONT from '../../style/style';

const Soal = props => {
  const renderPilihan = () => {
    const pilihan = props.pilihan.map((item, index) => {
      return (
        <View style={styles.pilihan} key={index}>
          <Radio
            color={props.isDisable ? 'grey' : '#1A7280'}
            selectedColor={props.isDisable ? 'grey' : 'black'}
            onPress={() => props.onClick(index)}
            selected={props.activeJawaban === index}
            disabled={props.isDisable}
          />
          <Text style={styles.textPilihan}>{item}</Text>
        </View>
      );
    });
    return pilihan;
  };
  return (
    <View>
      <Text style={[FONT.FONT_MAIN_BOLD]}>{props.title}</Text>
      <View style={styles.wrapper}>{renderPilihan()}</View>
    </View>
  );
};

export default Soal;
