import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1C7690',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    padding: 16,
    backgroundColor: '#E8F1F4',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  picture: {
    width: 92,
    height: 92,
    borderRadius: 1000,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    marginLeft: 20,
  },
  name: {
    marginTop: 4,
    marginBottom: 9,
  },
});

export default styles;
