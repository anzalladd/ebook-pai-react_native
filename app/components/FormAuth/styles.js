import {StyleSheet} from 'react-native';
import {COLOR, CONSTANS} from '../../configs';

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR.GREY_INPUT,
    borderBottomColor: COLOR.GREY_INPUT,
    paddingLeft: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  link: {
    color: COLOR.MAIN_PRIMARY,
    fontSize: CONSTANS.TYPO_SMALL,
  },
});

export default styles;
