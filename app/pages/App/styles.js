import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  header: {
    paddingTop: 28,
    paddingLeft: 25,
    paddingRight: 59,
    paddingBottom: 21,
    backgroundColor: '#E2E6E8',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selamat: {
    fontSize: 14,
  },
  username: {
    fontSize: 18,
    fontFamily: CONSTANS.FONT_MEDIUM,
  },
  userData: {
    paddingLeft: 13,
  },
  progress: {
    width: '100%',
    display: 'flex',
    height: 69,
    flexDirection: 'row',
    marginBottom: 28,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#022539',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#1C7690',
  },
  titleProgress: {
    color: 'white',
    fontSize: 15,
  },
  descriptionProgress: {
    color: 'white',
    fontFamily: CONSTANS.FONT_BOLD,
    fontSize: 28,
  },
  wrapper: {
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
  },
  rowFirst: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSecond: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  materi: {
    backgroundColor: '#FDAE38',
    width: '48%',
    paddingTop: 41,
    paddingBottom: 41,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  latihan: {
    backgroundColor: '#418B9B',
    width: '48%',
    paddingTop: 41,
    paddingBottom: 41,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  ambil: {
    backgroundColor: '#F75435',
    width: '48%',
    paddingTop: 41,
    paddingBottom: 41,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  about: {
    backgroundColor: '#FFAD8C',
    width: '48%',
    paddingTop: 41,
    paddingBottom: 41,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  listText: {
    fontSize: 18,
    color: 'white',
    marginTop: 14,
  },
});

export default styles;
