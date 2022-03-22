import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import { setShowShopping } from './actions';
import PlayGame from './PlayGame';

const key = 'App';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  const onClickShoppingButton = () => {
    dispatch(setShowShopping(true));
  };

  const onClickBackButton = () => {
    dispatch(setShowShopping(false));
  };

  return (
    <Layout turn={turn}>
      <View style={appStyle.appBar}>
        <View style={appStyle.turnView}>
          {isShowShopping ? (
            <TouchableOpacity
              onPress={onClickBackButton}
              onLongPress={onClickBackButton}>
              <Text style={appStyle.inputTextLabel}>Back</Text>
            </TouchableOpacity>
          ) : (
            <>
              <ImageBackground
                source={images.home.turn}
                style={appStyle.turnImage}>
                <Text style={appStyle.turnText}>{turn}</Text>
              </ImageBackground>
              <TouchableOpacity
                onPress={onClickShoppingButton}
                onLongPress={onClickShoppingButton}>
                <Image
                  source={images.home.shopping}
                  style={appStyle.shoppingImage}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <View style={appStyle.mainView}>
        {isShowShopping ? <Buttons /> : <PlayGame />}
      </View>
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowShopping: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(App);
