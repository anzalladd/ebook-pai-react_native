import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1C7690',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  wrapper: {
    paddingLeft: 17,
    paddingRight: 17,
  },
  mapel: {
    fontSize: 19
  },
  titleMateri: {
    fontSize: 55,
    fontFamily: CONSTANS.FONT_BOLD,
    textAlign: 'center',
  },
  accordion: {
    borderWidth: 0,
  },
  // headerAccordion: {
  //   marginTop: 30,
  //   height: 50,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 0,
  //   },
  //   elevation: 3,
  // },
  Content:{
    fontWeight:'bold'
  },
  BabContainer:{
    paddingHorizontal: 21
  },
  Bab: {
    backgroundColor:'#D9DFE2',
    marginTop: 20,
    height: 105,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  TitleBab: {
    marginTop: 7,
    marginLeft: 7,
    fontSize: 16,
    fontWeight:'bold'
  },
  Desc: {
    marginLeft:10
  }
});

export default styles;
