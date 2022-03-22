import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  appBar: {
    paddingTop: 10,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    width: '100%',
  },

  turnView: {
    width: 180,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  turnImage: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shoppingImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  turnText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Golden Age Shad',
    paddingLeft: 30,
  },

  textPanel: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Golden Age Shad',
  },

  playButton: {
    width: 80,
    height: 80,
  },

  scoreText: {
    position: 'absolute',
    top: '-8%',
    right: '6%',
    color: 'white',
    fontSize: 25,
    fontFamily: 'Golden Age Shad',
  },

  bottomText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Golden Age Shad',
  },

  mainView: {
    flex: 0.9,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  timeText: {
    color: 'white',
    fontSize: 100,
    fontFamily: 'Golden Age Shad',
  },

  panelImage: {
    width: 270,
    height: 220,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  playImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  inputImage: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },

  textView: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputTextLabel: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Golden Age Shad',
  },

  inputText: {
    fontSize: 20,
    fontFamily: 'Golden Age Shad',
    color: 'white',
    paddingLeft: 30,
    textAlign: 'left',
  },

  submitButton: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  children: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    top: '10%',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
