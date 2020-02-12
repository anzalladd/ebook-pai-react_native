import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(40, 53, 98, .75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: 'white',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 30,
  },
});

export default styles;
