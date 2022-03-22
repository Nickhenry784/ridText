import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { images } from 'assets/images';
import { SizedBox } from 'sizedbox';
import { makeSelectTurn } from './selectors';
import { appStyle } from './style';
import { decrementTurn } from './actions';

const key = 'App';

function App({ dispatch, turn }) {
  // eslint-disable-next-line global-require
  const randomWords = require('random-words');
  const [inputText, setInputText] = useState('');
  const [playState, setPlayState] = useState(false);
  const [randomWord, setRandomWord] = useState(randomWords());
  const [scoreNumber, setScoreNumber] = useState(0);
  const [time, setTime] = useState(5);

  const onSetPlayState = () => {
    if (turn > 0) {
      setPlayState(true);
    } else {
      Alert.alert('Please buy more turn');
    }
  };

  useEffect(() => {
    const decrementNumber = () => {
      if (playState && time > 0) {
        setTime(time - 1);
      }
    };
    const result = () => {
      if (playState && time === 0) {
        if (inputText.toLowerCase() === randomWord) {
          setScoreNumber(scoreNumber + 10);
          setRandomWord(randomWords());
          setInputText('');
          setTime(5);
        } else {
          dispatch(decrementTurn());
          setScoreNumber(0);
          setInputText('');
          setRandomWord(randomWords());
          setPlayState(false);
          setTime(5);
        }
      }
    };
    const timer2 = setTimeout(result, 1000);
    const timer1 = setTimeout(decrementNumber, 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [time, playState]);

  const onSubmitInputText = () => {
    if (inputText.toLowerCase() === randomWord) {
      setScoreNumber(scoreNumber + 10);
      setRandomWord(randomWords());
      setInputText('');
      setTime(5);
    } else {
      dispatch(decrementTurn());
      setScoreNumber(0);
      setInputText('');
      setRandomWord(randomWords());
      setPlayState(false);
      setTime(5);
    }
  };

  return (
    <>
      <Text style={appStyle.scoreText}>
        Score:
        {scoreNumber}
      </Text>
      <Text style={appStyle.timeText}>{time}</Text>
      <SizedBox vertical={10} />
      <ImageBackground
        source={images.home.panelText}
        style={appStyle.panelImage}>
        {playState ? (
          <Text style={appStyle.textPanel}>{randomWord}</Text>
        ) : (
          <TouchableOpacity
            onPress={onSetPlayState}
            onLongPress={onSetPlayState}
            style={appStyle.playButton}>
            <Image source={images.home.play} style={appStyle.playImage} />
          </TouchableOpacity>
        )}
      </ImageBackground>
      <SizedBox vertical={10} />
      <View style={appStyle.textView}>
        <Text style={appStyle.inputTextLabel}>Text</Text>
        <ImageBackground
          source={images.home.inputText}
          style={appStyle.inputImage}>
          <TextInput
            style={appStyle.inputText}
            onChangeText={setInputText}
            editable={playState}
            value={String(inputText)}
            onSubmitEditing={onSubmitInputText}
          />
        </ImageBackground>
      </View>
      <SizedBox vertical={10} />
      <TouchableOpacity
        onPress={onSubmitInputText}
        onLongPress={onSubmitInputText}>
        <Image source={images.home.submit} style={appStyle.submitButton} />
      </TouchableOpacity>
      <SizedBox vertical={20} />
      <Text style={appStyle.bottomText}>ENTER RIGHT TEXT AND SUBMIT</Text>
      <Text style={appStyle.bottomText}>YOU HAVE 5S</Text>
    </>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
