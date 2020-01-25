import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../configs';

const style = StyleSheet.create({
  FONT_BIG: {
    fontSize: CONSTANS.TYPO_BIG,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.BLACK_2,
  },
  FONT_REGULAR: {
    fontSize: CONSTANS.TYPO_REGULAR,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.BLACK_2,
  },
  FONT_HEADER: {
    fontSize: CONSTANS.TYPO_HEADER,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.BLACK_1,
  },
  FONT_HEADER_WHITE: {
    fontSize: CONSTANS.TYPO_HEADER,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.WHITE,
  },
  FONT_CONTENT_WHITE: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.WHITE,
  },
  FONT_CONTENT: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.BLACK_1,
  },
  CONTAINER: {
    paddingHorizontal: CONSTANS.BASE_MARGIN,
  },
});

export default style;
