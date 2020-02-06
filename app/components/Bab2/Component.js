import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';

const Component = () => {
  return (
    <View>
      <Text style={styles.bab1}>BAB 2</Text>
      <Text style={styles.bab}>Sejarah Demokrasi</Text>
      <Text style={styles.Text}>
        Di Yunani, anggota parlemen Athena bernama Solon (sekitar 630–560 SM)
        mempresentasikan versi awal demokrasi partisipatif, yang dicampur dengan
        elemen-elemen keadilan sosial. Ia bertujuan untuk mengoreksi kontrol
        pemerintah yang eksklusif dan opresif (menindas).{' '}
      </Text>
      <Text style={styles.Text}>
        Pada saat demokrasi mulai berfungsi di Athena, banyak negara kota
        lainnya memilih untuk menerapkan sistem tersebut di pemerintahan mereka.
        Akan tetapi kesempatan untuk memilih lebih sedikit daripada yang
        diberlakukan di Athena.
      </Text>
      <Text style={styles.Text}>
        Satu masalah besar bagi demokrasi pada masa kuno adalah kurangnya waktu
        bagi laki-laki untuk selalu pergi ke tempat pertemuan untuk memilih.
      </Text>
      <Text style={styles.Text}>
        Di Athena, orang-orang yang menjadi perwakilan rakyat dipilih melalui
        jalur undian. Pria yang mendapatkan kemenangan di undian maka ia berhak
        duduk di Dewan 500. Kemudian ia akan melayani selama setahun di dewan
        tersebut. selanjutnya demokrasi menyebar ke wilayah sekitar Laut Tengah.
        Akan tetapi demokrasi di kawasan ini hampir musnah oleh Kekaisaran
        Romawi sekitar 100 SM.
      </Text>
      <Text style={styles.Text}>
        Dewasa ini banyak negara menganut bentuk negara demokrasi. Pada abad
        ke-20. sebagian besar orang miskin, orang kulit berwarna, dan wanita
        telah memenangkan hak untuk memilih, meskipun anak-anak dan orang asing
        masih tidak bisa.
      </Text>
      <Text style={styles.Textlast}>
        Kendati negara yang menganut demokrasi telah menjamur, namun jumlah
        kekuasaan yang tersedia bagi para pemilih masih bervariasi dari satu
        negara ke negara lain dan beberapa negara Timur Tengah seperti Arab
        Saudi masih belum menerapkan sistem ini.
      </Text>
    </View>
  );
};

export default Component;
