import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#418B9B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'white',
    color: '#418B9B',
    borderColor: '#418B9B',
    width: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
});

export default styles;
