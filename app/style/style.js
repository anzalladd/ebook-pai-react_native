import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../configs';

const style = StyleSheet.create({
  FONT_BIG: {
    fontSize: CONSTANS.TYPO_BIG,
    fontFamily: CONSTANS.FONT_BOLD,
    fontWeight: 'bold',
    color: COLOR.BLACK_2,
  },
  FONT_BIG_WHITE: {
    fontSize: CONSTANS.TYPO_BIG,
    fontFamily: CONSTANS.FONT_BOLD,
    fontWeight: 'bold',
    color: COLOR.WHITE,
  },
  FONT_TITLE_WHITE: {
    fontSize: CONSTANS.TYPO_TITLE,
    fontFamily: CONSTANS.FONT_BOLD,
    fontWeight: 'bold',
    color: COLOR.WHITE,
  },
  FONT_TITLE_WHITE_REGULAR: {
    fontSize: CONSTANS.TYPO_TITLE,
    fontFamily: CONSTANS.FONT_REGULAR,
    fontWeight: 'bold',
    color: COLOR.WHITE,
  },
  FONT_REGULAR: {
    fontSize: CONSTANS.TYPO_REGULAR,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.BLACK_2,
  },
  FONT_HEADER: {
    fontSize: CONSTANS.TYPO_HEADER,
    fontFamily: CONSTANS.FONT_BOLD,
    fontWeight: 'bold',
    color: COLOR.BLACK_1,
  },
  FONT_HEADER_WHITE: {
    fontSize: CONSTANS.TYPO_HEADER,
    fontFamily: CONSTANS.FONT_BOLD,
    fontWeight: 'bold',
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
  FONT_CONTENT_MEDIUM: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_MEDIUM,
    fontWeight: '500',
    color: COLOR.BLACK_1,
  },
  CONTAINER: {
    paddingHorizontal: CONSTANS.BASE_MARGIN,
  },
  FONT_MAIN_BOLD: {
    fontSize: CONSTANS.TYPO_MAIN,
    fontFamily: CONSTANS.FONT_BOLD,
    fontWeight: 'bold',
    color: COLOR.BLACK_1,
  },
});

export default style;
