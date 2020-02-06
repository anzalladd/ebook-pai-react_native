import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';

const Component = () => {
  return (
    <View>
      <Text style={styles.bab1}>BAB 9</Text>
      <Text style={styles.bab}>Contoh Negara Demokrasi</Text>
      <Text style={styles.title}>Amerika Serikat</Text>
      <Text style={styles.title}>
        Amerika Serikat merupakan negara yang menganut sistem demokrasi liberal
        dengan konstitusi yang dipakai berupa republik.
      </Text>
      <Text style={styles.title}>Rusia</Text>
      <Text style={styles.title}>
        Rusia merupakan negara yang menerapkan sistem demokrasi rakyat atau
        sosial komunis.
      </Text>
      <Text style={styles.title}>Switzerland</Text>
      <Text style={styles.title}>
        Wilayah Switzerland merupakan salah satu negara yang masih menggunakan
        sistem demokrasi langsung.
      </Text>

      <Text style={styles.title}>Jerman</Text>
      <Text style={styles.title}>
        Jerman merupakan salah satu negara yang menggunakan sistem demokrasi
        parlementer.
      </Text>
      <Text style={styles.title}>Selandia Baru</Text>
      <Text style={styles.title}>
        Selandia Baru merupakan monarki konstitusional dengan sistem demokrasi
        parlementer.
      </Text>
      <Text style={styles.title}>Indonesia</Text>
      <Text style={styles.title}>
        Indonesia merupakan negara yang menggunakan sistem demokrasi pancasila.
      </Text>
    </View>
  );
};

export default Component;
