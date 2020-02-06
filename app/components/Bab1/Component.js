import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';
// import VideoPlayer from 'react-native-video-player';
// const VIMEO_ID = '179859217';

// export default class Component extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       video: { width: undefined, height: undefined, duration: undefined },
//       thumbnailUrl: undefined,
//       videoUrl: undefined,
//     };
//   }

//   componentDidMount() {
//     global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
//       .then(res => res.json())
//       .then(res => this.setState({
//         thumbnailUrl: res.video.thumbs['640'],
//         videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
//         video: res.video,
//       }));
//   }

const Component = () => {
  return (
    <View>
<<<<<<< HEAD
      <Text style={styles.bab1}>BAB 1</Text>
      <Text style={styles.bab}>Pengertian Demokrasi Menurut Para Ahli </Text>
      <Text style={styles.title}>Abraham Lincoln</Text>
      {/* <View style={styles.VideoPlayer}> */}
      {/* <VideoPlayer
          // endWithThumbnail
          // thumbnail={{
          // 	uri:
          // 		'http://digitalcomb.com/cg-animation-vfx/wp-content/uploads/2014/02/Big-Buck-Bunny.jpg'
          // }}
          video={{
            uri:
              'https://rawcdn.githack.com/TegarFhammam12/video-belajar-pph/4d032c2341e9d74c1a1a00ff6d6a6c4e49af2a7f/PERLINDUNGAN-DAN-PENEGAKAN-HUKUM-DI-INDONESIA.mp4',
          }}
          videoWidth={this.state.video.width}
          videoHeight={this.state.video.height}
          duration={this.state.video.duration}
          ref={r => (this.player = r)}
        />
      </View> */}
      <Text style={styles.Text}>
        Abraham Lincoln menyatakan bahwa demokrasi merupakan suatu sistem
        pemerintahan yang diselenggarakan dari rakyat, oleh rakyat, dan untuk
        rakyat. Dari pengertian tersebut bisa disimpulkan bahwa rakyat merupakan
        pemegang kekuasaan tertinggi dalam suatu pemerintahan, dimana
        masing-masing dari mereka memiliki hak dalam memperoleh kesempatan serta
        hak dalam bersuara yang sama dalam upaya mengatur kebijakan
        pemerintahan. Dalam sistem ini, keputusan diambil berdasarkan hasil
        suara terbanyak.
      </Text>
      <Text style={styles.title}>Menurut H. Harris Soche </Text>
      <Text style={styles.Text}>
        Demokrasi merupakan suatu bentuk pemerintahan rakyat. Artinya rakyat
        atau orang banyak merupakan pemegang kekuasaan dalam pemerintahan.
        Mereka memiliki hak untuk mengatur, mempertahankan, serta melindungi
        diri mereka dari adanya paksaan dari wakil-wakil mereka, yaitu
        orang-orang atau badan yang diserahi wewenang untuk memerintah.
      </Text>
      <Text style={styles.title}>Menurut Hannry B. Mayo</Text>
      <Text style={styles.Text}>
        Dalam demokrasi suatu kebijaksanaan umum ditentukan atas dasar mayoritas
        oleh wakil-wakil yang secara efektif diawasi oleh rakyat melalui
        berbagai macam pemilihan yang dilakukan berdasarkan pada prinsip
        kesamaan politik serta diselenggarakan dalam suasana dimana kebebasan
        politik terjadi.
      </Text>
      <Text style={styles.title}>Makna Demokrasi</Text>
      <Text style={styles.Textlast}>
        Demokrasi pertama kali diperkenalkan sejak abad ke-5 sebelum masehi di
        Athena, Yunani. Demokrasi berasal dari kata Demos yang memiliki arti
        rakyat, dan kratos atau cratein yang memiliki arti pemerintahan. Dengan
        begitu dapat diartikan bahwa demokrasi merupakan pemerintahan rakyat,
        atau juga dapat disebut sebagai pemerintahan dari rakyat, oleh rakyat,
        dan untuk rakyat.
      </Text>
=======
      <Text>Bab1</Text>
>>>>>>> 76950b96826a1fbc6e25ab414b7230ef9536071e
    </View>
  );
};

export default Component;
