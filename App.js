/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

import Header from './src/components/Header'

export default class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView>
          <Header></Header>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({

})
