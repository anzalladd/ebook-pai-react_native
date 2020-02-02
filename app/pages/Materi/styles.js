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
    fontSize: 55,
    fontFamily: CONSTANS.FONT_BOLD,
    textAlign: 'center',
  },
  accordion: {
    borderWidth: 0,
  },
  Content: {
    fontWeight: 'bold',
  },
  BabContainer: {
    paddingHorizontal: 21,
    paddingBottom: 21,
  },
  Bab: {
    backgroundColor: 'white',
    marginTop: 20,
    shadowColor: '#000',
    borderRadius: 10,
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 14,
    paddingBottom: 14,
    display: 'flex',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  babTitle: {
    flex: 2,
    paddingRight: 14,
  },
  babImage: {
    flex: 1,
    alignItems: 'flex-end',
  },
  babTitle__title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1C7690',
  },
  babTitle__content: {
    fontSize: 12,
    color: '#1C7690',
    paddingTop: 7,
    paddingBottom: 14,
  },
  babTitle__selengkapnya: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1C7690',
    textAlign: 'right',
  },
  TitleBab: {
    marginTop: 7,
    marginLeft: 7,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Desc: {
    marginLeft: 10,
  },
});

export default styles;
