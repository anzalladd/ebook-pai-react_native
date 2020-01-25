import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E2E6E8',
  },
  title: {
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.BLACK_2,
    fontSize: 34,
  },
  description: {
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.BLACK_2,
    fontSize: 18,
  },
});

export default styles;
