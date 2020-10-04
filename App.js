import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Feed from './src/screens/Feed'

export default class App extends Component {
  render() {
    return (
      <>
        <Feed />
      </>
    );
  }
}

const styles = StyleSheet.create({

})
