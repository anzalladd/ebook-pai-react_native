import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    marginTop: 53,
    flexDirection: 'column',
    paddingLeft: CONSTANS.BASE_MARGIN,
  },
  title: {
    marginTop: 30,
    paddingBottom: 10,
  },
  description: {
    width: '80%',
  },
  btnLogin: {
    marginLeft: CONSTANS.BASE_MARGIN,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: COLOR.BLACK_2,
    marginTop: 20,
    borderRadius: 30,
  },
  btnIcon: {
    color: 'white',
    marginLeft: CONSTANS.BASE_MARGIN,
  },
  btnText: {
    marginBottom: 5,
    color: COLOR.WHITE_TEXT_BTN,
    fontFamily: CONSTANS.FONT_SEMIBOLD,
    fontSize: CONSTANS.TYPO_REGULAR,
  },
  textChange: {
    textAlign: 'center',
    marginTop: 9,
  },
});

export default styles;
