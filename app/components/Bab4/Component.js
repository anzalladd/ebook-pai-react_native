import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';

const Component = () => {
  return (
    <View>
      <Text style={styles.bab1}>BAB 4</Text>
      <Text style={styles.bab}>Ciri-ciri Demokrasi</Text>
      <Text style={styles.Text}>
        Ciri-ciri pemerintahan demokratis Dalam perkembangannya, demokrasi
        menjadi suatu tatanan yang diterima dan dipakai oleh hampir seluruh
        negara di dunia. Ciri-ciri suatu pemerintahan demokrasi adalah sebagai
        berikut:
      </Text>
      <Text style={styles.textbold}>
        1. Adanya keterlibatan warga negara (rakyat) dalam pengambilan keputusan
        politik, baik langsung maupun tidak langsung (perwakilan).
      </Text>
      <Text style={styles.textbold}>
        2.Adanya pengakuan, penghargaan, dan perlindungan terhadap hak-hak asasi
        rakyat (warga negara).
      </Text>
      <Text style={styles.textbold}>
        3. Adanya persamaan hak bagi seluruh warga negara dalam segala bidang.
      </Text>
      <Text style={styles.textbold}>
        4. Adanya lembaga peradilan dan kekuasaan kehakiman yang independen
        sebagai alat penegakan hukum
      </Text>
      <Text style={styles.textbold}>
        5.Adanya kebebasan dan kemerdekaan bagi seluruh warga negara.
      </Text>
      <Text style={styles.textbold}>
        6. Adanya pers (media massa) yang bebas untuk menyampaikan informasi dan
        mengontrol perilaku dan kebijakan pemerintah.
      </Text>
      <Text style={styles.textbold}>
        7. Adanya pemilihan umum untuk memilih wakil rakyat yang duduk di
        lembaga perwakilan rakyat.
      </Text>
      <Text style={styles.textbold}>
        8. Adanya pemilihan umum yang bebas, jujur, adil untuk menentukan
        (memilih) pemimpin negara dan pemerintahan serta anggota lembaga
        perwakilan rakyat.
      </Text>
      <Text style={styles.Textlastbold}>
        9. Adanya pengakuan terhadap perbedaan keragaman (suku, agama, golongan,
        dan sebagainya).
      </Text>
    </View>
  );
};

export default Component;
