import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1C7690',
  },
  container: {
    padding: 20,
    paddingBottom: 30,
  },
  soal: {
    marginTop: 10,
  },
  jumlahSoal: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  wrapperButton: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  btnForward: {
    width: 99,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#418B9B',
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  penjelasan: {
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 30,
    borderColor: '#D9DFE2',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pembahasan: {
    marginTop: 20,
  },
});

export default styles;
