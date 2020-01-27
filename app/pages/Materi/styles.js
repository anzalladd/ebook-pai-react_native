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
    fontSize: 19,
  },
  titleMateri: {
    fontSize: 50,
    fontFamily: CONSTANS.FONT_BOLD,
    textAlign: 'center',
  },
  accordion: {
    borderWidth: 0,
  },
  headerAccordion: {
    marginTop: 30,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
  },
});

export default styles;
